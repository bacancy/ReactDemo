module.exports = {
  init: function () {
    localStorage.clear();
    localStorage.setItem('intro', JSON.stringify([
      {
        id: '0',
        title: 'Inroduction to Stack',
        code:'void  function2(void) { \n\tchar small[12];\n\tfgets(small,12,stdin);\n\tprintf("%s\\n", small);\n}\n\nfunction1() {\n\n\tfunction2();\n\tprintf("Good Bye");\n\n}',
        stacks: ['0xbffff6d8','0xbffff6d4','0xbffff6d0','0xbffff6cc','0xbffff6c8','0xbffff6c4'],
        steps: [
          {
            id: '0',
            title:'Dynamic Title',
            description: 'The following module will give you a brief introduction on how stack data structures are used to keep track of function/subroutine calls, specifically a look at how C/C++ programs save return addresses, parameters and local variables on the stack.',
            assembly: [],
            assembly_class: '',
            stack:[]
          },
          {
            id: '1',
            title:'Dynamic Title',
            description: 'The CODE window loads a sample C program, which accepts a string input from the user, and prints this value to STDIO. <br/><br/> The main() method is the entry point of the sample C program, which  upon execution, pushes the value of %ebp register on the stack. This is set to NULL',
            assembly: [{assemblyId: "0x80484c8 (function1):         pushl  %ebp",lineNo: 6},{assemblyId: "0x80484c9 (function1+1):     movl   %esp,%ebp",lineNo: 6}],
            assembly_class: 'blue',
            stack:[{code:'0xbffff6d8',title:'EBP',value:'0x00000000'}]
          },
          {
            id: '2',
            title:'Dynamic Title',
            description: 'The test() function is then invoked by main() using the "call" instruction.<br/><br/> The call instruction, will call the test method which is mapped on address 0x80484a0. <br/><br/> However, before branching out to the "test" method, it first saves the next instruction\'s address 0x80484d0 on the stack. <br/><br/>  It saves this address, to branch back to the execution, once test() method has finished execution',
            assembly: [{assemblyId: "0x80484cb (function1+3): call 0x80484a0 (function2)",lineNo: 8},{assemblyId: "0x80484d0 (function1+8): call 0x80583c9 (printf)",lineNo: 9},{assemblyId: "0x80484e4 (function1+13): leave",lineNo: 9}],
            assembly_class: 'green',
            stack:[{code:'0xbffff6d4',title:'EIP',value:'0x080484d0'}]
          }
        ]
      }
    ]));
  }
};
