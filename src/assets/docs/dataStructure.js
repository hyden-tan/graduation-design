export default {
    title: 'Data Structure',
    content: `# C数据类型(Data Type)
 
在 C 语言中，数据类型指的是用于声明不同类型的变量或函数的一个广泛的系统。变量的类型决定了变量存储占用的空间，以及如何解释存储的位模式。
## c语言中的数据类型分类
### 基本类型
- **整型**

|    | 关键字  |变量声明实例
| :------------ | :------------ | :------------ |
|基本整型   |int   |int a;   |
|长整型   |long   |long int a; 或者 long a;  |
|短整型   |short   |short int a; 或者 short a;   |
|无符号整型 |unsigned   |unsigned int a;  unsigned long b;  unsigned  short c;  |

- **实型(浮点型)**

|   |关键字   |变量声明实例   |
| :------------ | :------------ | :------------ |
|单精度实型   |float   |float a;   |
|双精度实型   |double   |double a;   |
|长双精度实型|long double|long double a;|

- **字符型**

|   |关键字   |变量声明实例
| :------------ | :------------ |:-------------|
|字符型|char|char a;|

- **枚举类型**

|   |关键字   |变量声明实例
| :------------ | :------------ |:-------------|
|枚举类型|enum|enum response{no,yes,none};  enum response answer;|

### 构造类型
- **数组**

|   |关键字|变量声明实例
| :------------ | :------------ |:------------|
|数组||int score[10]; char name[20];|

- **结构体**

|   |关键字|
| :------------ | :------------ |
|结构体|struct|

**变量声明实例:**

    struct date
    {
        int year;
        int month;
        int day;
    };
    struct data d;|
    }
    
- **共用体**

|   |关键字|
| :------------ | :------------ |
|共用体|union||

**变量声明实例:**

    union
    {
        int single;
        char spouseName[20];
        struct date divorcedDay;
    }married;

###  指针类型
**变量声明实例:**


    int  *ptr;
    
    char *pStr;
    
###  无类型
|   |关键字|
| :------------ | :------------ |
|无类型|void|

**变量声明实例:**


    void Sort (int array[], int n);
    void *malloc(unsigned int size);
## 如何计算变量或数据类型所占空间大小
为了得到某个类型或某个变量在特定平台上的准确大小，您可以使用 sizeof 运算符。表达式 sizeof(type) 得到对象或类型的存储字节大小。下面的实例演示了获取 int 类型的大小：


**实例:**



    #include &lt;stdio.h>
    #include &lt;limits.h>
     
    int main()
    {
       printf("int 存储大小 : %lu \\n", sizeof(int)); // out: int 存储大小 blabla
       
       return 0;
    }

下面的实例将输出浮点类型占用的存储空间以及它的范围值：

**实例:**

    #include &lt;stdio.h>
    #include &lt;float.h>
     
    int main()
    {
       printf("float 存储最大字节数 : %lu \\n", sizeof(float));
       printf("float 最小值: %E\\n", FLT_MIN );
       printf("float 最大值: %E\\n", FLT_MAX );
       printf("精度值: %d\\n", FLT_DIG );
       
       return 0;
    }

`,
}