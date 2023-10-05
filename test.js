document.addEventListener('DOMContentLoaded', () => {
    var numbers = [1, 2, 3, 4, 5]
    var total = 0
    i = 0;

    function x(numbers) {
        var x = 0
        if (numbers.lenght > 0) {
            for (i = 0; i < numbers.lenght; i++) {
                total += numbers[i]
            }

            x = total / numbers.lenght
        }
        return x;
    }
    console.log(total)
    console.log(i)
    var y = x(numbers)


    var sum = 0.1 + 0.7
    console.log(sum)


    function Supplier() {
        this.supply = function () {
            return this;
        };

    }

    var supplier = new Supplier();
    var supply = supplier.supply()
    var comparison = (supplier === supply)
    console.log(comparison)

})
{}