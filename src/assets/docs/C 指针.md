# C ָ��
ѧϰ C ���Ե�ָ��ȼ�����Ȥ��ͨ��ָ�룬���Լ�һЩ C ��������ִ�У�����һЩ�����綯̬�ڴ���䣬û��ָ�����޷�ִ�еġ����ԣ���Ҫ��Ϊһ������� C ����Ա��ѧϰָ���Ǻ��б�Ҫ�ġ�

��������֪���ģ�ÿһ����������һ���ڴ�λ�ã�ÿһ���ڴ�λ�ö������˿�ʹ�����ֺţ�&����������ʵĵ�ַ������ʾ�����ڴ��е�һ����ַ���뿴�����ʵ���������������ı�����ַ��

**ʵ��**

    #include &lt;stdio.h>
     
    int main ()
    {
       int  var1;
       char var2[10];
     
       printf("var1 �����ĵ�ַ�� %p\n", &var1  );  // out : var1 �����ĵ�ַ�� 0019FF3C
       printf("var2 �����ĵ�ַ�� %p\n", &var2  );  // out : var2 �����ĵ�ַ�� 0019FF30
     
       return 0;
    }

ͨ�������ʵ���������˽���ʲô���ڴ��ַ�Լ���η������������������ǿ���ʲô��ָ�롣

## ʲô��ָ�룿

ָ����һ����������ֵΪ��һ�������ĵ�ַ�������ڴ�λ�õ�ֱ�ӵ�ַ������������������һ������������ʹ��ָ��洢����������ַ֮ǰ���������������ָ�����������һ����ʽΪ��

    type *var-name;

�����type ��ָ��Ļ����ͣ���������һ����Ч�� C �������ͣ�var-name ��ָ����������ơ���������ָ����Ǻ� * ��˷���ʹ�õ��Ǻ�����ͬ�ġ����ǣ����������У��Ǻ�������ָ��һ��������ָ�롣��������Ч��ָ��������

    int    *ip;    /* һ�����͵�ָ�� */
    double *dp;    /* һ�� double �͵�ָ�� */
    float  *fp;    /* һ�������͵�ָ�� */
    char   *ch;     /* һ���ַ��͵�ָ�� */

����ָ���ֵ��ʵ���������ͣ����������͡������͡��ַ��ͣ������������������ͣ�����һ���ģ�����һ�������ڴ��ַ�ĳ���ʮ������������ͬ�������͵�ָ��֮��Ψһ�Ĳ�ͬ�ǣ�ָ����ָ��ı����������������Ͳ�ͬ��

## ���ʹ��ָ�룿
ʹ��ָ��ʱ��Ƶ���������¼�������������һ��ָ��������ѱ�����ַ��ֵ��ָ�롢����ָ������п��õ�ַ��ֵ����Щ��ͨ��ʹ��һԪ����� * ������λ�ڲ�������ָ����ַ�ı�����ֵ�������ʵ���漰������Щ������

**ʵ��**

    #include &lt;stdio.h>
     
    int main ()
    {
       int  var = 20;   /* ʵ�ʱ��������� */
       int  *ip;        /* ָ����������� */
     
       ip = &var;  /* ��ָ������д洢 var �ĵ�ַ */
     
       printf("Address of var variable: %p\n", &var  );  // out : Address of var variable: 0019FF3C
     
       /* ��ָ������д洢�ĵ�ַ */
       printf("Address stored in ip variable: %p\n", ip );  // out : Address stored in ip variable: 0019FF3C
     
       /* ʹ��ָ�����ֵ */
       printf("Value of *ip variable: %d\n", *ip );  // out : Value of *ip variable: 20
     
       return 0;
    }

## C �е� NULL ָ��

�ڱ���������ʱ�����û��ȷ�еĵ�ַ���Ը�ֵ��Ϊָ�������һ�� NULL ֵ��һ�����õı��ϰ�ߡ���Ϊ NULL ֵ��ָ�뱻��Ϊ��ָ�롣

NULL ָ����һ�������ڱ�׼���е�ֵΪ��ĳ������뿴����ĳ���

**ʵ��**

    #include &lt;stdio.h>
     
    int main ()
    {
       int  *ptr = NULL;
     
       printf("ptr ��ֵ�� %p\n", ptr  );  // out : ptr ��ֵ�� 00000000
     
       return 0;
    }

�ڴ�����Ĳ���ϵͳ�ϣ�����������ʵ�ַΪ 0 ���ڴ棬��Ϊ���ڴ��ǲ���ϵͳ�����ġ�Ȼ�����ڴ��ַ 0 ���ر���Ҫ�����壬��������ָ�벻ָ��һ���ɷ��ʵ��ڴ�λ�á������չ��������ָ�������ֵ����ֵ������ٶ�����ָ���κζ�����

������һ����ָ�룬������ʹ�� if ��䣬������ʾ��

    if(ptr)     /* ��� p �ǿգ������ */
    if(!ptr)    /* ��� p Ϊ�գ������ */

## C ָ�����
�� C �У��кܶ�ָ����صĸ����Щ����ܼ򵥣����Ƕ�����Ҫ�������г��� C ����Ա���������һЩ��ָ����ص���Ҫ���

### ָ�����������

C ָ����һ������ֵ��ʾ�ĵ�ַ����ˣ������Զ�ָ��ִ���������㡣���Զ�ָ����������������㣺++��--��+��-��

���� ptr ��һ��ָ���ַ 1000 ������ָ�룬��һ�� 32 λ�������������ǶԸ�ָ��ִ�����е��������㣺

    ptr++

��ִ��������������֮��ptr ��ָ��λ�� 1004����Ϊ ptr ÿ����һ�Σ�������ָ����һ������λ�ã�����ǰλ�������� 4 ���ֽڡ����������ڲ�Ӱ���ڴ�λ����ʵ��ֵ������£��ƶ�ָ�뵽��һ���ڴ�λ�á���� ptr ָ��һ����ַΪ 1000 ���ַ������������ᵼ��ָ��ָ��λ�� 1001����Ϊ��һ���ַ�λ������ 1001��

#### ����һ��ָ��
����ϲ���ڳ�����ʹ��ָ��������飬��Ϊ����ָ����Ե����������鲻�ܵ�������Ϊ������һ������ָ�롣����ĳ����������ָ�룬�Ա�˳����������е�ÿһ��Ԫ�أ�

    #include &lt;stdio.h>
    
    const int MAX = 3;
    
    int main ()
    {
       int  var[] = {10, 100, 200};
       int  i, *ptr;
    
       /* ָ���е������ַ */
       ptr = var;
       for ( i = 0; i < MAX; i++)
       {
    
          printf("�洢��ַ��var[%d] = %x\n", i, ptr );
          printf("�洢ֵ��var[%d] = %d\n", i, *ptr );
    
          /* �ƶ�����һ��λ�� */
          ptr++;
       }
       return 0;
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    �洢��ַ��var[0] = 19ff34
    �洢ֵ��var[0] = 10
    �洢��ַ��var[1] = 19ff38
    �洢ֵ��var[1] = 100
    �洢��ַ��var[2] = 19ff3c
    �洢ֵ��var[2] = 200

#### �ݼ�һ��ָ��
ͬ���أ���ָ����еݼ����㣬����ֵ��ȥ���������͵��ֽ�����������ʾ��

    #include &lt;stdio.h>
    
    const int MAX = 3;
    
    int main ()
    {
       int  var[] = {10, 100, 200};
       int  i, *ptr;
    
       /* ָ�������һ��Ԫ�صĵ�ַ */
       ptr = &var[MAX-1];
       for ( i = MAX; i > 0; i--)
       {
    
          printf("�洢��ַ��var[%d] = %x\n", i-1, ptr );
          printf("�洢ֵ��var[%d] = %d\n", i-1, *ptr );
    
          /* �ƶ�����һ��λ�� */
          ptr--;
       }
       return 0;
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    �洢��ַ��var[2] = 19ff3c
    �洢ֵ��var[2] = 200
    �洢��ַ��var[1] = 19ff38
    �洢ֵ��var[1] = 100
    �洢��ַ��var[0] = 19ff34
    �洢ֵ��var[0] = 10

#### ָ��ıȽ�

ָ������ù�ϵ��������бȽϣ��� ==��< �� >����� p1 �� p2 ָ��������صı���������ͬһ�������еĲ�ͬԪ�أ���ɶ� p1 �� p2 ���д�С�Ƚϡ�

����ĳ����޸��������ʵ����ֻҪ����ָ����ָ��ĵ�ַС�ڻ������������һ��Ԫ�صĵ�ַ &var[MAX - 1]����ѱ���ָ����е�����

    #include &lt;stdio.h>
    
    const int MAX = 3;
    
    int main ()
    {
       int  var[] = {10, 100, 200};
       int  i, *ptr;
    
       /* ָ���е�һ��Ԫ�صĵ�ַ */
       ptr = var;
       i = 0;
       while ( ptr <= &var[MAX - 1] )
       {
    
          printf("Address of var[%d] = %x\n", i, ptr );
          printf("Value of var[%d] = %d\n", i, *ptr );
    
          /* ָ����һ��λ�� */
          ptr++;
          i++;
       }
       return 0;
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    Address of var[0] = 19ff34
    Value of var[0] = 10
    Address of var[1] = 19ff38
    Value of var[1] = 100
    Address of var[2] = 19ff3c
    Value of var[2] = 200

### C ָ������
�����ǽ���ָ������ĸ���֮ǰ��������������һ��ʵ�������õ���һ���� 3 ��������ɵ����飺

**ʵ��**

    #include &lt;stdio.h>
     
    const int MAX = 3;
     
    int main ()
    {
       int  var[] = {10, 100, 200};
       int i;
     
       for (i = 0; i < MAX; i++)
       {
          printf("Value of var[%d] = %d\n", i, var[i] );
       }
       return 0;
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    Value of var[0] = 10
    Value of var[1] = 100
    Value of var[2] = 200

������һ�������������Ҫ������洢ָ�� int �� char �������������͵�ָ�롣������һ��ָ��������ָ�������������

    int *ptr[MAX];

������� ptr ����Ϊһ�����飬�� MAX ������ָ����ɡ���ˣ�ptr �е�ÿ��Ԫ�أ�����һ��ָ�� int ֵ��ָ�롣

��Ҳ������һ��ָ���ַ���ָ���������洢һ���ַ����б����£�

**ʵ��**

    #include &lt;stdio.h>
     
    const int MAX = 4;
     
    int main ()
    {
       char *names[] = {
                       "Zara Ali",
                       "Hina Ali",
                       "Nuha Ali",
                       "Sara Ali",
       };
       int i = 0;
     
       for ( i = 0; i < MAX; i++)
       {
          printf("Value of names[%d] = %s\n", i, names[i] );
       }
       return 0;
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    Value of names[0] = Zara Ali
    Value of names[1] = Hina Ali
    Value of names[2] = Nuha Ali
    Value of names[3] = Sara Ali

### ָ��ָ���ָ��

ָ��ָ���ָ����һ�ֶ༶���Ѱַ����ʽ������˵��һ��ָ������ͨ����һ��ָ�����һ�������ĵ�ַ�������Ƕ���һ��ָ��ָ���ָ��ʱ����һ��ָ������˵ڶ���ָ��ĵ�ַ���ڶ���ָ��ָ�����ʵ��ֵ��λ�á�

һ��ָ��ָ���ָ����������������������ڱ�����ǰ���������Ǻš����磬����������һ��ָ�� int ����ָ���ָ�룺

    int **var;

��һ��Ŀ��ֵ��һ��ָ����ָ����һ��ָ��ʱ���������ֵ��Ҫʹ�������Ǻ��������������ʵ����ʾ��

    #include &lt;stdio.h>
     
    int main ()
    {
       int  var;
       int  *ptr;
       int  **pptr;
    
       var = 3000;
    
       /* ��ȡ var �ĵ�ַ */
       ptr = &var;
    
       /* ʹ������� & ��ȡ ptr �ĵ�ַ */
       pptr = &ptr;
    
       /* ʹ�� pptr ��ȡֵ */
       printf("Value of var = %d\n", var );  // out : Value of var = 3000
       printf("Value available at *ptr = %d\n", *ptr );  // out : Value available at *ptr = 3000
       printf("Value available at **pptr = %d\n", **pptr);  // out : Value available at **pptr = 3000
    
       return 0;
    }

### ����ָ�������

C ��������������ָ���������ֻ��Ҫ�򵥵�������������Ϊָ�����ͼ��ɡ�

�����ʵ���У����Ǵ���һ���޷��ŵ� long ��ָ������������ں����ڸı����ֵ

    #include &lt;stdio.h>
    #include &lt;time.h>
     
    void getSeconds(unsigned long *par);
    
    int main ()
    {
       unsigned long sec;
    
    
       getSeconds( &sec );
    
       /* ���ʵ��ֵ */
       printf("Number of seconds: %ld\n", sec );  // out : Number of seconds: 1521380044
    
       return 0;
    }
    
    void getSeconds(unsigned long *par)
    {
       /* ��ȡ��ǰ������ */
       *par = time( NULL );
       return;
    }

�ܽ���ָ����Ϊ�����ĺ�����Ҳ�ܽ���������Ϊ������������ʾ��

    #include &lt;stdio.h>
     
    /* �������� */
    double getAverage(int *arr, int size);
     
    int main ()
    {
       /* ���� 5 ��Ԫ�ص���������  */
       int balance[5] = {1000, 2, 3, 17, 50};
       double avg;
     
       /* ����һ��ָ�������ָ����Ϊ���� */
       avg = getAverage( balance, 5 ) ;
     
       /* �������ֵ  */
       printf("Average value is: %f\n", avg );  //  out : Average value is: 214.400000
        
       return 0;
    }
    
    double getAverage(int *arr, int size)
    {
      int    i, sum = 0;       
      double avg;          
     
      for (i = 0; i < size; ++i)
      {
        sum += arr[i];
      }
     
      avg = (double)sum / size;
     
      return avg;
    }

### �Ӻ�������ָ��
����һ���У������Ѿ��˽��� C ��������δӺ����������飬���Ƶأ�C �������Ӻ�������ָ�롣Ϊ��������㣬����������һ������ָ��ĺ�����������ʾ��

    int * myFunction()
    {

    }

���⣬C ��֧���ں����ⷵ�ؾֲ������ĵ�ַ�����Ƕ���ֲ�����Ϊ static ������

���ڣ���������������ĺ������������� 10 �����������ʹ�ñ�ʾָ���������������һ������Ԫ�صĵ�ַ�����������ǣ��������£�

    #include &lt;stdio.h>
    #include &lt;time.h>
    #include &lt;stdlib.h> 
    
    /* Ҫ���ɺͷ���������ĺ��� */
    int * getRandom( )
    {
       static int  r[10];
       int i;
     
       /* �������� */
       srand( (unsigned)time( NULL ) );
       for ( i = 0; i < 10; ++i)
       {
          r[i] = rand();
          printf("%d\n", r[i] );
       }
     
       return r;
    }
     
    /* Ҫ�������涨�庯���������� */
    int main ()
    {
       /* һ��ָ��������ָ�� */
       int *p;
       int i;
    
       p = getRandom();
       for ( i = 0; i < 10; i++ )
       {
           printf("*(p + [%d]) : %d\n", i, *(p + i) );
       }
     
       return 0;
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    2270
    30227
    16337
    1137
    3894
    27247
    5595
    3392
    26438
    20745
    *(p + [0]) : 2270
    *(p + [1]) : 30227
    *(p + [2]) : 16337
    *(p + [3]) : 1137
    *(p + [4]) : 3894
    *(p + [5]) : 27247
    *(p + [6]) : 5595
    *(p + [7]) : 3392
    *(p + [8]) : 26438
    *(p + [9]) : 20745

## ����ָ��
����ָ����ָ������ָ�������
ͨ������˵��ָ�������ָ��һ�����͡��ַ��ͻ�����ȱ�����������ָ����ָ������
����ָ�������һ�㺯��һ�������ڵ��ú��������ݲ�����
����ָ�������������

    typedef int (*fun_ptr)(int,int); // ����һ��ָ��ͬ������������ֵ�ĺ���ָ������

**ʵ��**
����ʵ�������˺���ָ����� p��ָ���� max��

    #include &lt;stdio.h>
     
    int max(int x, int y)
    {
        return x > y ? x : y;
    }
     
    int main(void)
    {
        /* p �Ǻ���ָ�� */
        int (* p)(int, int) = & max; // &����ʡ��
        int a, b, c, d;
     
        printf("��������������:");  // out : ��������������:
        scanf("%d %d %d", & a, & b, & c);
     
        /* ��ֱ�ӵ��ú����ȼۣ�d = max(max(a, b), c) */
        d = p(p(a, b), c); 
     
        printf("����������: %d\n", d); // out :  ����������: 3
     
        return 0;
    }

## �ص�����
### ����ָ����Ϊĳ�������Ĳ���
����ָ�����������Ϊĳ�������Ĳ�����ʹ�õģ��ص���������һ��ͨ������ָ����õĺ�����

�򵥽����ص��������ɱ��˵ĺ���ִ��ʱ������ʵ�ֵĺ�����

**ʵ��**
    #include &lt;stdio.h>  
      
    void PrintNum(int n);  
    void ShowNum(int n,void (* ptr)());  
      
    void PrintMessage1();  
    void PrintMessage2();  
    void PrintMessage3();  
    void ShowMessage(void (* ptr)());  
      
    int main(){  
       ShowNum(11111,PrintNum);  
       ShowNum(22222,PrintNum);  
       ShowMessage(PrintMessage1);  
       ShowMessage(PrintMessage2);  
       ShowMessage(PrintMessage3);  
    }  
      
    void PrintNum(int n){  
       printf("Test1 is called,the number is %d\n",n);  
    }  
      
    void ShowNum(int n,void (* ptr)()){  
       (* ptr)(n);  
    }  
      
      
    void PrintMessage1(){  
       printf("This is the message 1!\n");  
    }  
      
    void PrintMessage2(){  
       printf("This is the message 2!\n");  
    }  
      
    void PrintMessage3(){  
       printf("This is the message 3!\n");  
    }  
      
    void ShowMessage(void (* ptr)()){  
        (* ptr)();  
    } 

������Ĵ��뱻�����ִ��ʱ������������н����

    Test1 is called,the number is 11111
    Test1 is called,the number is 22222
    This is the message 1!
    This is the message 2!
    This is the message 3!
