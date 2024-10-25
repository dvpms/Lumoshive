/*
    Saya menghilangkan class Developer dan memecahnya menjadi lebih spesisfik,
    untuk menerapkan prinsip single responsibility principle. Karena kalau pakai developer,
    maka semua developer harus bisa membuat database, UI, dan desain. Artinya melanggar
    Interface segregation principle.
*/ 

class Backend { 
    // Kelas dasar untuk Backend dengan metode untuk membuat database
    createDb() { 
        throw new Error("createDb() must be implemented"); // Metode ini harus diimplementasikan dalam kelas turunan
    }
}

class Frontend { 
    // Kelas dasar untuk Frontend dengan metode untuk membuat UI
    createUI() { 
        throw new Error("createUI() must be implemented"); // Metode ini harus diimplementasikan dalam kelas turunan
    }
}

class Designer { 
    // Kelas dasar untuk Designer dengan metode untuk membuat desain
    createDesign() { 
        throw new Error("createDesign() must be implemented"); // Metode ini harus diimplementasikan dalam kelas turunan
    }
}

class UIDesigner extends Designer { 
    // Kelas turunan Designer yang mengimplementasikan metode createDesign
    createDesign() { 
        console.log("Design created"); // Mengeluarkan pesan bahwa desain telah dibuat
    }
}

class FrontendDeveloper extends Frontend { 
    // Kelas turunan Frontend yang mengimplementasikan metode untuk UI dan menambahkan metode baru
    createUI() { 
        console.log("UI created"); // Mengeluarkan pesan bahwa UI telah dibuat
    }

    createAnimation() { 
        console.log("Animation created"); // Mengeluarkan pesan bahwa animasi telah dibuat
    }

    deployWeb() { 
        console.log("Website is Deployed"); // Mengeluarkan pesan bahwa website telah dideploy
    }
}

class BackendDeveloper extends Backend { 
    // Kelas turunan Backend yang mengimplementasikan metode untuk database dan API
    createDb() { 
        console.log("Database created"); // Mengeluarkan pesan bahwa database telah dibuat
    }

    createAPI() { 
        console.log("API created"); // Mengeluarkan pesan bahwa API telah dibuat
    }
}

class Project { 
    // Kelas yang mengelola proyek dan semua developer yang terlibat
    constructor(uidesigner, frontend, backend) { 
        this.uidesigner = uidesigner; // Menyimpan instance UIDesigner
        this.frontend = frontend; // Menyimpan instance FrontendDeveloper
        this.backend = backend; // Menyimpan instance BackendDeveloper
    }

    buildDesign() { 
        this.uidesigner.createDesign(); // Memanggil metode createDesign dari UIDesigner
    }

    buildUI() { 
        this.frontend.createUI(); // Memanggil metode createUI dari FrontendDeveloper
        this.frontend.createAnimation(); // Memanggil metode createAnimation dari FrontendDeveloper
    }

    buildDatabase() { 
        this.backend.createDb(); // Memanggil metode createDb dari BackendDeveloper
    }

    buildAPI() { 
        this.backend.createAPI(); // Memanggil metode createAPI dari BackendDeveloper
    }

    deployWeb() { 
        this.frontend.deployWeb(); // Memanggil metode deployWeb dari FrontendDeveloper
    }
}

class ProjectManager { 
    // Kelas yang mengelola dan mengatur proyek
    createProject(project) { 
        console.log("I'm building website, wait a minute..."); // Mengeluarkan pesan bahwa proyek sedang dibangun
        project.buildDesign(); // Memanggil metode buildDesign pada proyek
        project.buildUI(); // Memanggil metode buildUI pada proyek
        project.buildDatabase(); // Memanggil metode buildDatabase pada proyek
        project.buildAPI(); // Memanggil metode buildAPI pada proyek
        project.deployWeb(); // Memanggil metode deployWeb pada proyek
        console.log("Website is done"); // Mengeluarkan pesan bahwa website telah selesai
    }
}

// Membuat instance dari masing-masing developer
const uidesigner = new UIDesigner(); // Membuat instance UIDesigner
const frontend = new FrontendDeveloper(); // Membuat instance FrontendDeveloper
const backend = new BackendDeveloper(); // Membuat instance BackendDeveloper

// Membuat proyek baru dengan developer yang telah dibuat
const project = new Project(uidesigner, frontend, backend); 
const projectManager = new ProjectManager(); // Membuat instance ProjectManager
projectManager.createProject(project); // Mengatur proyek dengan ProjectManager


/*
    Mohon maaf, videonya ternyata gagal upload. udah nunggu lama tapi gagal. Saya bikin komentar untuk menjelaskannya.
*/