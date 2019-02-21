onButton.connect=function(){
    send("connect",vm.current)
}
onButton.disconnect=function(){
    send("disconnect",vm.current)
}
onButton.createGame=function(){
    vm.createFail=[];
    vm.gameCreateForm={};
    vm.gameCreateFormVisible=true;
}
onButton.createGameSubmit=function(){
    send("createGame",vm.gameCreateForm)
}
onButton.triggers=function(){
    vm.triggers=null;
    vm.triggersVisible=true
    send("triggers",current)
}
onButton.createTrigger=function(){
    vm.triggerSaveFormVisible=true
    vm.triggerName=""
    vm.triggerSaveForm={}
}
onButton.saveTriggerSubmit=function(){
    vm.triggerSaveForm.Name=vm.triggerName
    vm.triggerSaveForm.Priority=vm.triggerSaveForm.Priority*1;
    send("saveTrigger",vm.triggerSaveForm)
}