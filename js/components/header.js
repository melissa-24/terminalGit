class Navigation extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <a href="./index.html">Home</a>
                <a href="./collab.html">Open Source and Collaboration</a>
                <a href="./resources.html">Some Resources</a>
                <a href='https://hackmd.io/uv_lg3AdTvymhf5hf4tGQg?view' target='_blank'>HackMd Notes</a>
            </nav>
        `
    }
}
customElements.define('nav-component', Navigation)