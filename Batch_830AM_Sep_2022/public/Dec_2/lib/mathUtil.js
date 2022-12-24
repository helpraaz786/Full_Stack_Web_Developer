 
var mathUtilLib = (() => {
    var count = 5;

    var sample = () => {
        console.log("am from lib guy");
    }
    var getAddition = (a1, a2) => {
        count++;
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        var result = a1 + a2;
        return result;
    }

    var getSubstraction = (a1, a2) => {
        count++;
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        var result = a1 - a2;
        return result;
    }

    var getDivision = (a1, a2) => {
        count++;
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        var result = a1 / a2;
        return result;
    }

    
    var getCoiunt = () => {
        return count;
    }
    return {
        getAdditionValues(a1, a2) {
            return getAddition(a1, a2);
        },
        getMultiplication(a1, a2) {
            count++;
            a1 = parseInt(a1);
            a2 = parseInt(a2);
            var result = a1 * a2;
            return result;
        }
    }
})();

 