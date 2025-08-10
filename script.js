


const add_button = document.getElementById("add-to-pdf")
const view_button = document.getElementById("view-pdf")
console.log("Hello")

// creating the document definiton model for pdfMake
let dd = {}
const text_formatting = (code_lines) => {
    console.log("inside text formatting");
    dd["content"] = [{}]
    dd["content"][0]["text"] = []
    console.log(dd)
    for(let line of code_lines){
        if(line.includes(" for")){
            let i = line.indexOf(" for")
            dd["content"][0]["text"].push(line.slice(0,i))
            dd["content"][0]["text"].push({
                "text": line.slice(i,i+4),
                "bold":true
            })
            dd["content"][0]["text"].push(line.slice(i+4))
        }
        else{
            dd["content"][0]["text"].push(line)
        }
        dd["content"][0]["text"].push("\n")

        // dd["content"][0]["text"].push(line)
    }
    console.log(dd)
};

add_button.addEventListener("click",()=>{
    console.log("Add Button clicked");
    const code_input = document.getElementById("code-input");
    const code_text = code_input.value;
    const code_lines = code_text.split("\n");
    text_formatting(code_lines);
    console.log(code_text);
});

view_button.addEventListener("click", async ()=>{
    console.log("View Button clicked");
    await pdfMake.createPdf(dd).open();
});


