class Footer extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <h3>Created and Maintained by Melissa Longenberger</h3>
                <a href="https://github.com/melissa-24/terminalGit"> Source Code</a>
            </footer>
        `
    }
}
customElements.define('footer-component', Footer)
