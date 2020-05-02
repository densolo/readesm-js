
import Reporter from 'Reporter/Reporter';
import Block from 'DataTypes/Block';
import * as isEmpty from 'lodash/isEmpty';
import QString from 'utils/QString';
import {HTML_TEMPLATE} from 'Reporter/HtmlReporterTemplate.html';


export default class HtmlReporter extends Reporter {

    protected linkNumber: number;
    protected toggleNumber: number;
    protected linkCollected: string;

    constructor() {
        super();

        this.linkNumber = 0;
        this.toggleNumber = 0;

        this.linkCollected = "<h3>Content</h3><ul>";
    }

    renderReport(): string {
        let html = HTML_TEMPLATE;
        html = html.replace(/\$title/g, this.title);
        html = html.replace("$content", this.collected);
        html = html.replace(/\$show/g, "show");
        html = html.replace(/\$hide/g, "hide");
        html = html.replace("$links", this.linkCollected + "</ul>");
        html = html.replace(/\$version/g, "ReadESM (1.0.11)");

        return html;
    }

    tagValuePair(tag: string|QString, value: string) {
        let copy = HtmlReporter.replaceAmp(value.toString());
        this.collected += `\n<li>${tag}: <b>${copy}</b></li>`;
    }

    subBlock(value: Block, tag: string) {
        let lTag = tag;
        if (this.nestLevel === 1) {
            this.linkNumber += 1;
            this.linkCollected += `<li><a href='#${this.linkNumber}'>${tag}</a></li>`;
            lTag = `<a name='${this.linkNumber}'>${tag}</a>`;
        }

        if (this.nestLevel === 1) {
            this.collected += `\n<h3>${lTag}</h3>`;
            this.collected += "<ul>";
            value.printOn(this);
            this.collected += "</ul>";
        } else {
            if (!isEmpty(value.toString())) {
                if (isEmpty(tag)) {
                    this.collected += this.toggleAbleBlocks(HtmlReporter.replaceAmp(value.toString()), false);
                } else {
                    this.collected += this.toggleAbleBlocks(`${lTag}: <b>${HtmlReporter.replaceAmp(value.toString())}</b>`, true);
                }
                value.printOn(this);
                this.collected += "</ul></li>";
            } else {
                if (!isEmpty(tag)) {
                    this.collected += `\n<li>${lTag}: <ul>`;
                } else {
                    this.collected += "\n<li><ul>";
                }
                value.printOn(this);
                this.collected += "</ul></li>";
            }
        }
    }

    toggleAbleBlocks(title: string, showByDefault: boolean) {
        this.toggleNumber += 1;
        return `\n<li>${title} 
            (<a href='#link${this.toggleNumber}' 
                onclick='return toggle_visibility(${this.toggleNumber});' 
                name='link${this.toggleNumber}' 
                id='link${this.toggleNumber}'>${showByDefault ? 'hide' : 'show'}</a>)
                <ul style='${showByDefault ? '' : 'display:none'}' 
                    name='toggled${this.toggleNumber}' 
                    id='toggled${this.toggleNumber}'>`
    }

    allowSvg() {
        return true;
    }

    arrayStart(count: number, title: string, defaultShown: boolean) {
        if (count > 0) {
            this.collected += this.toggleAbleBlocks(`${count} ${title}`, defaultShown);
        } else {
            this.collected += `<li>No ${title}.</li>`
        }
    }

    arrayEnd(count: number) {
        if (count > 0) {
            this.collected += '</ul></li>';
        }
    }

    static replaceAmp(value: string) {
        return value.replace(/&/g, "&amp;");
    }
}
