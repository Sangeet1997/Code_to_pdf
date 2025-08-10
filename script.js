
const add_button = document.getElementById("add-to-pdf")
const view_button = document.getElementById("view-pdf")
const delete_button = document.getElementById("delete-from-pdf")
const delete_all_button = document.getElementById("delete-all")
console.log("Hello")

// creating the document definiton model for pdfMake
let dd = {
        content:[],
        styles:{
            code:{
                font: 'Roboto',
                preserveLeadingSpaces: true, 
                characterSpacing: 1.5,
                lineHeight: 1.4,
            },
            header:{
                fontSize: 20,
                bold: true
            }
        }
    }

//function to create a horizontal rule
const hr = (width = 515, margin = [0, 5, 0, 5]) => {
  return {
    text:"_______________________________________________________________________________________________",
    color: "lightgrey"
  };
};

const text_formatting = (code_lines, problem_title) => {
    let l = dd.content.length;
    if(l === 0){
        dd.content.push(
            {
                text: problem_title,
                style: "header"
            },
            hr()
        )
    }
    else{
        dd.content.push(
            {
                text: problem_title,
                style: "header",
                pageBreak: "before"
            },
            hr()
        )
    }
    let code_block = {
        text:["\n"],
        style:"code"
    }
    for(let line of code_lines){

        if(line.includes("#")){
            let i = line.indexOf("#")
            code_block.text.push(line.slice(0,i))
            code_block.text.push({
                "text": line.slice(i),
                "color":"grey"
            })
        }
        else{
            code_block.text.push(line)
        }
        code_block.text.push("\n");
        dd.content.push(code_block);

    }
    console.log(dd)
};

add_button.addEventListener("click",()=>{
    console.log("Add Button clicked");
    const code_input = document.getElementById("code-input");
    const problem_title_input = document.getElementById("problem-title");
    const problem_title_text = problem_title_input.value;
    const code_text = code_input.value;
    const code_lines = code_text.split("\n");
    text_formatting(code_lines, problem_title_text);
    code_input.value = "";
    problem_title_input.value = "";
    console.log(code_text);
});

//pdf is created and opened on a different window when view-button is clicked
view_button.addEventListener("click", async ()=>{
    console.log("View Button clicked");
    await pdfMake.createPdf(dd).open();
});

delete_button.addEventListener("click", async ()=>{
    console.log("Delete button clicked");
    const page_number = document.getElementById("delete-page").value;
    let i = 0;
    let page_count = 0;
    while(i < dd.content.length && page_count < page_number){
        console.log(i);
        if(dd.content[i].length !== 0){
            page_count += 1;
        }
        i += 1;
    }
    if(page_count === page_number){
        dd.content[i-1] = {}
    }
});

delete_all_button.addEventListener("click",()=>{
    console.log("Delete-all-button clicked");
    while(dd.content.length){
        dd.content.pop();
    }
});

