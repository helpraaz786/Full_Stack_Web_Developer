var generatePaySlip = () => {
    var empDetails = {}
    empDetails.eName = document.querySelector("#ename").value;
    empDetails.eDep = document.querySelector("#edept").value;
    empDetails.eAge = document.querySelector("#eAge").value;
    empDetails.eBasicSal = parseInt(document.querySelector("#eBasicSal").value);
    empDetails.resetFields = () => {
        document.querySelector("#ename").value = '';
        document.querySelector("#edept").value = '';
        document.querySelector("#eAge").value = '';
        document.querySelector("#eBasicSal").value = '';

    }
    empDetails.getPfAndHra = () => {
        empDetails.totalSal = 0;
        empDetails.pf = empDetails.eBasicSal * (12 / 100);
        empDetails.hra = empDetails.eBasicSal * (24 / 100);
        empDetails.totalSal = empDetails.eBasicSal + empDetails.pf + empDetails.hra;
    }
    empDetails.getTotalTax = () => {
        var taxPercent = 0;
        if (empDetails.totalSal >= 50000) {
            taxPercent = 10;
        } else if (empDetails.totalSal >= 20000) {
            taxPercent = 5;
        }
        empDetails.totalTaxToBePaid = empDetails.totalSal * taxPercent / 100;
    }
    empDetails.showDetails = () => {
        empDetails.resetFields();
        empDetails.getPfAndHra();
        empDetails.getTotalTax();
        document.querySelector("#d_name").innerText = empDetails.eName;
        document.querySelector("#d_age").innerText = empDetails.eAge;
        document.querySelector("#d_bsal").innerText = empDetails.eBasicSal;
        document.querySelector("#d_tsal").innerText = empDetails.totalSal;
        document.querySelector("#d_tax").innerText = empDetails.totalTaxToBePaid;
    }
    empDetails.showDetails();
}
