import * as readline from 'readline';

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function calculate(num1:number,num2:number,operators:string):number {
    switch (operators) {
            case "+":
                return num1 +num2
            case "-":
                return num1 -num2
            case "*":
                return num1 *num2
            case "/":
                if (num2 !==0) {
                    return num1 /num2
                }else{
                    throw new Error("It can not deivide with zero value");
                }
            default:
                throw new Error("invalid opraator");
            }
            }
    function main() {
       r1.question("Enter the first number",(num1output)=>{
         const num1 = parseFloat(num1output)
           r1.question("Enter the second number",(num2output)=>{
            const num2 = parseFloat(num2output)
              r1.question("Enter the oprator",(operators)=>{
                try {
                    const result = calculate(num1,num2,operators)
                    console.log(`result: ${result}`)
                } catch (error) {
                    console.error(error)
                }finally {
                    r1.close();
                  }
            })
        })
    })
}
main()


