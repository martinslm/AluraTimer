const { app, BrowserWindow, ipcMain } =  require('electron'); //importando somente alguns modulos do Electron. 
//app: Este é responsável por controlar o ciclo de vida da aplicação desktop.
//BrowserWindow: Responsável por criar janelas.
//IPCMain "escuta" o canal de comunicação que veio do IPCRenderer

app.on('ready', () => {
    console.log('Aplicação Iniciada');
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
})

app.on('window-all-closed', () => {
    app.quit();
})

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
    if(sobreWindow == null) 
    {
        sobreWindow = new BrowserWindow({
            width: 350,
            height: 220,
            alwaysOnTop: true,
            frame: false //menu padrão da janela
        });
    }

    sobreWindow.on('closed', () => {
        sobreWindow = null;
    })
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
})

ipcMain.on('fechar-janela-sobre', () => {
    sobreWindow.close();
});
