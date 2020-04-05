
import Reporter from 'Reporter/Reporter';
import Block from 'DataTypes/Block';
import FileUtil from 'utils/FileUtil';


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
        let html = FileUtil.readFile('resources/template.html').toString();
        console.log("html: " + html);
        
        html = html.replace("$title", this.title);
        html = html.replace("$content", this.collected);
        html = html.replace("$show", "show");
        html = html.replace("$hide", "hide");
        html = html.replace("$links", this.linkCollected + "</ul>");
        html = html.replace("$version", "ReadESM (version)");

        return html;
    }

    tagValuePair(tag: string, value: string) {
        let copy = tag.replace('&', '&amp;');
        this.collected += '\n<li>' + tag + ': <b>' + copy + '</b></li>';
    }

    subBlock(value: Block, tag: string) {
        //TODO
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
}