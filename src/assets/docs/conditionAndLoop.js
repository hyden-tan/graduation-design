export default {
    title: 'Hello World',
    cc: 1,
    content: `# C 判断与循环
    ## C判断
    判断结构要求程序员指定一个或多个要评估或测试的条件，以及条件为真时要执行的语句（必需的）和条件为假时要执行的语句（可选的）。
    C 语言把任何非零和非空的值假定为 true，把零或 null 假定为 false。
    ### 判断语句
    C 语言提供了以下类型的判断语句。
    - **if 语句**
    一个 if 语句 由一个布尔表达式后跟一个或多个语句组成。
    - **if else 语句**
    一个 if 语句 后可跟一个可选的 else 语句，else 语句在布尔表达式为假时执行。
    - **嵌套 if 语句**
    您可以在一个 if 或 else if 语句内使用另一个 if 或 else if 语句。
    - **switch 语句**
    一个 switch 语句允许测试一个变量等于多个值时的情况。
    - **嵌套 switch 语句**
    您可以在一个 switch 语句内使用另一个 switch 语句。
    
    ### ? : 运算符(三元运算符)
    我们已经在前面的章节中讲解了 条件运算符 ? :，可以用来替代 if...else 语句。它的一般形式如下：
    
        Exp1 ? Exp2 : Exp3;
    
    其中，Exp1、Exp2 和 Exp3 是表达式。请注意，冒号的使用和位置。
    ? 表达式的值是由 Exp1 决定的。如果 Exp1 为真，则计算 Exp2 的值，结果即为整个 ? 表达式的值。如果 Exp1 为假，则计算 Exp3 的值，结果即为整个 ? 表达式的值。
    
    **实例**
    以下实例通过输入一个数字来判断它是否为奇数或偶数
    
        #include &lt;stdio.h>
         
        int main()
        {
            int num;
         
            printf("输入一个数字 : ");
            scanf("%d",&num);
         
            (num%2==0)?printf("偶数"):printf("奇数");
        }
    
    ## C 循环
    有的时候，我们可能需要多次执行同一块代码。一般情况下，语句是按顺序执行的：函数中的第一个语句先执行，接着是第二个语句，依此类推。
    编程语言提供了更为复杂执行路径的多种控制结构。
    ### 循环类型
    C 语言提供了以下几种循环类型。
    - **while 循环**
    当给定条件为真时，重复语句或语句组。它会在执行循环主体之前测试条件。
    - **for 循环**
    多次执行一个语句序列，简化管理循环变量的代码。
    - **do...while 循环**
    除了它是在循环主体结尾测试条件外，其他与 while 语句类似。
    - **嵌套循环**
    您可以在 while、for 或 do..while 循环内使用一个或多个循环。
    ### 循环控制语句
    循环控制语句改变你代码的执行顺序。通过它你可以实现代码的跳转。
    C 提供了下列的循环控制语句。
    - **break 语句**
    终止循环或 switch 语句，程序流将继续执行紧接着循环或 switch 的下一条语句。
    - **continue 语句**
    告诉一个循环体立刻停止本次循环迭代，重新开始下次循环迭代。
    - **goto 语句**
    将控制转移到被标记的语句。但是不建议在程序中使用 goto 语句。
    
    ### 无限循环
    如果条件永远不为假，则循环将变成无限循环。for 循环在传统意义上可用于实现无限循环。由于构成循环的三个表达式中任何一个都不是必需的，您可以将某些条件表达式留空来构成一个无限循环。
    
    **实例**
        #include &lt;stdio.h>
         
        int main ()
        {
           for( ; ; )
           {
              printf("该循环会永远执行下去！\n");
           }
           return 0;
        }
    
    当条件表达式不存在时，它被假设为真。您也可以设置一个初始值和增量表达式，但是一般情况下，C 程序员偏向于使用 for(;;) 结构来表示一个无限循环。
    
    `
}