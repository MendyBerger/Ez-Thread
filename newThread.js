function newThread(func, context, removeMethods) {
    return new Promise(function (resolve, reject) {

        //build worker body
        let workerBody = `
            onmessage = function (e){
                for ( let i in e.data ){
                    this[i] = e.data[i];
                }
                const func = ${ func }
                self.postMessage(
                    func()
                );
            }
        `;

        //construct worker
        const blob = new Blob([workerBody], {type: 'application/javascript'});
        const worker = new Worker(URL.createObjectURL(blob));
        worker.postMessage(context);

        //listen for messages and events
        worker.addEventListener("message", function (e) {
            resolve(e.data);
            worker.terminate();
        });
        worker.addEventListener("error", function (e){
            reject(e);
            worker.terminate();
        });

    });
}