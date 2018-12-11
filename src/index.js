import section from './sectionHeadbandA.vue'

const name = "headband_A";

const addComponent = function () {
    if (window.vm) {
        window.vm.addComponent(name, section);

        return true;
    }
    return false;
}

if (!addComponent()) {
    const iniInterval = setInterval(function () {
        if (addComponent()) {
            clearInterval(iniInterval);
        }
    }, 10);
}