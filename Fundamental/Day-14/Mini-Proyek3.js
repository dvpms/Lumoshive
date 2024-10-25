class Backend {
    createDb() {
        throw new Error("createDb() must be implemented");
    }
}

class Frontend {
    createUI() {
        throw new Error("createUI() must be implemented");
    }
}

class Designer {
    createDesign() {
        throw new Error("createDesign() must be implemented");
    }
}

class UIDesigner extends Designer {
    createDesign() {
        console.log("Design created");
    }
}

class FrontendDeveloper extends Frontend {
    createUI() {
        console.log("UI created");
    }

    createAnimation() {
        console.log("Animation created");
    }

    deployWeb() {
        console.log("Website is Deployed");
    }

}

class BackendDeveloper extends Backend {
    createDb() {
        console.log("Database created");
    }

    createAPI() {
        console.log("API created");
    }
}

class Project {
    constructor(uidesigner, frontend, backend) {
        this.uidesigner = uidesigner;
        this.frontend = frontend;
        this.backend = backend;
    }

    buildDesign() {
        this.uidesigner.createDesign(); 
    }

    buildUI() {
        this.frontend.createUI(); 
        this.frontend.createAnimation(); 
    }

    buildDatabase() {
        this.backend.createDb();
    }

    buildAPI() {
        this.backend.createAPI(); 
    }

    deployWeb() {
        this.frontend.deployWeb(); 
    }
}

class ProjectManager {
    createProject(project) {
        console.log("I'm building website, wait a minute...");
        project.buildDesign(); 
        project.buildUI(); 
        project.buildDatabase(); 
        project.buildAPI();
        project.deployWeb();
        console.log("Website is done");
    }

}

const uidesigner = new UIDesigner();
const frontend = new FrontendDeveloper();
const backend = new BackendDeveloper();

const project = new Project(uidesigner, frontend, backend);
const projectManager = new ProjectManager();
projectManager.createProject(project);

