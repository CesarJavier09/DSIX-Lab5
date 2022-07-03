    let emp1 = new Array(5);
    let emp2 = new Array(5);
    let emp3 = new Array(5);

    window.onload = function () {
        let input = document.querySelector(".input")
        let button = document.querySelector(".calcular")

        button.disabled = true

        input.addEventListener("change", stateHandle)

        function stateHandle() {
            if (document.querySelector(".input").value === "") {
                button.disabled = true
            } else {
                button.disabled = false
            }
        }
    }

    const calcular = () =>{
        getEmpData();
        let totalEmp1 = sumarPinnas(emp1);
        let totalEmp2 = sumarPinnas(emp2);
        let totalEmp3 = sumarPinnas(emp3);

        if (document.getElementById("resultados") === null) {
            
            let newDiv = document.createElement("div");

            let pEmp1 = document.createElement("p");
            let txtEmp1 = document.createTextNode("La cosecha del empleado 1 es: " + totalEmp1);
            pEmp1.appendChild(txtEmp1);

            let pEmp2 = document.createElement("p");
            let txtEmp2 = document.createTextNode("La cosecha del empleado 2 es: " + totalEmp2);
            pEmp2.appendChild(txtEmp2);

            let pEmp3 = document.createElement("p");
            let txtEmp3 = document.createTextNode("La cosecha del empleado 3 es: " + totalEmp3);
            pEmp3.appendChild(txtEmp3);

            let msj = document.createElement("p");
            let attrMsj = document.createAttribute("class");
            attrMsj.value = "mensaje";
            let txtMsj = document.createTextNode("¡Gracias por consumir piñas...de Finca la Piñita!");
            msj.appendChild(txtMsj);
            msj.setAttributeNode(attrMsj);

            newDiv.appendChild(pEmp1);
            newDiv.appendChild(pEmp2);
            newDiv.appendChild(pEmp3);
            let attrDiv = document.createAttribute("id");
            attrDiv.value = "resultados";
            newDiv.appendChild(msj);
            newDiv.setAttributeNode(attrDiv);

            document.body.appendChild(newDiv);

            let button = document.querySelector(".calcular");
            button.textContent = "Limpiar";
        } else {
            let divRemover = document.getElementById("resultados");
            let borrar = document.body.removeChild(divRemover);
            let button = document.querySelector(".calcular");
            button.disabled = true;
            button.textContent = "Calcular";
        }

        limpiar(emp1);
        limpiar(emp2);
        limpiar(emp3);
        
        console.log(totalEmp1);
        console.log(totalEmp2);
        console.log(totalEmp3);
    }

    const getEmpData = () =>{
        emp1 = [
            document.getElementById('emp1_d1'), 
            document.getElementById('emp1_d2'),
            document.getElementById('emp1_d3'),
            document.getElementById('emp1_d4'),
            document.getElementById('emp1_d5')
        ]

        emp2 = [
            document.getElementById('emp2_d1'), 
            document.getElementById('emp2_d2'),
            document.getElementById('emp2_d3'),
            document.getElementById('emp2_d4'),
            document.getElementById('emp2_d5')
        ]

        emp3 = [
            document.getElementById('emp3_d1'), 
            document.getElementById('emp3_d2'),
            document.getElementById('emp3_d3'),
            document.getElementById('emp3_d4'),
            document.getElementById('emp3_d5')
        ]
    }

    const sumarPinnas = (data) => {
        let suma = 0;
        for (let index = 0; index < data.length; index++) {
            if(isNaN(parseInt(data[index].value))){
                suma += 0;
            }else{
                suma += parseInt(data[index].value);
            }            
        }
        return suma;
    }

    const limpiar = (campos) => {
        for (let index = 0; index < campos.length; index++) {
            campos[index].value = null;
            if(campos[index].disabled){
                campos[index].disabled = false;
            }else{
                campos[index].disabled = true;
            }
        }
    }