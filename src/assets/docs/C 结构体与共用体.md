#  C �ṹ���빲����
## C�ṹ��
C ����������ɴ洢��ͬ����������ı������ṹ�� C �������һ���û��Զ���Ŀ��õ��������ͣ����������洢��ͬ���͵������
�ṹ���ڱ�ʾһ����¼����������Ҫ����ͼ������鱾�Ķ�̬����������Ҫ����ÿ������������ԣ�
- Title
- Author
- Subject
- Book ID

### ����ṹ
Ϊ�˶���ṹ��������ʹ�� struct ��䡣struct ��䶨����һ�����������Ա���µ��������ͣ�struct ���ĸ�ʽ���£�

    struct [structure tag]
    {
       member definition;
       member definition;
       ...
       member definition;
    } [one or more structure variables];

structure tag �ǿ�ѡ�ģ�ÿ�� member definition �Ǳ�׼�ı������壬���� int i; ���� float f; ����������Ч�ı������塣�ڽṹ�����ĩβ�����һ���ֺ�֮ǰ��������ָ��һ�������ṹ���������ǿ�ѡ�ġ����������� Book �ṹ�ķ�ʽ��

    struct Books
    {
       char  title[50];
       char  author[50];
       char  subject[100];
       int   book_id;
    } book;

### ���ʽṹ��Ա
Ϊ�˷��ʽṹ�ĳ�Ա������ʹ�ó�Ա�����������.������Ա����������ǽṹ�������ƺ�����Ҫ���ʵĽṹ��Ա֮���һ����š�������ʹ�� struct �ؼ���������ṹ���͵ı����������ʵ����ʾ�˽ṹ���÷���

**ʵ��**

    #include &lt;stdio.h>
    #include &lt;string.h>
     
    struct Books
    {
       char  title[50];
       char  author[50];
       char  subject[100];
       int   book_id;
    };
     
    int main( )
    {
       struct Books Book1;        /* ���� Book1������Ϊ Books */
       struct Books Book2;        /* ���� Book2������Ϊ Books */
     
       /* Book1 ���� */
       strcpy( Book1.title, "C Programming");
       strcpy( Book1.author, "Nuha Ali"); 
       strcpy( Book1.subject, "C Programming Tutorial");
       Book1.book_id = 6495407;
     
       /* Book2 ���� */
       strcpy( Book2.title, "Telecom Billing");
       strcpy( Book2.author, "Zara Ali");
       strcpy( Book2.subject, "Telecom Billing Tutorial");
       Book2.book_id = 6495700;
     
       /* ��� Book1 ��Ϣ */
       printf( "Book 1 title : %s\n", Book1.title);  // out :  Book 1 title : C Programming 
       printf( "Book 1 author : %s\n", Book1.author);  // out :  Book 1 author : Nuha Ali 
       printf( "Book 1 subject : %s\n", Book1.subject);  // out : Book 1 subject : C Programming Tutorial  
       printf( "Book 1 book_id : %d\n", Book1.book_id);  // out : Book 1 book_id : 6495407  
     
       /* ��� Book2 ��Ϣ */
       printf( "Book 2 title : %s\n", Book2.title);  // out : Book 2 title : Telecom Billing  
       printf( "Book 2 author : %s\n", Book2.author);  // out : Book 2 author : Zara Ali  
       printf( "Book 2 subject : %s\n", Book2.subject);  // out :  Book 2 subject : Telecom Billing Tutorial 
       printf( "Book 2 book_id : %d\n", Book2.book_id);  // out :  Book 2 book_id : 6495700 
     
       return 0;
    }

### �ṹ��Ϊ��������
�����԰ѽṹ��Ϊ�������������η�ʽ���������͵ı�����ָ�����ơ�������ʹ������ʵ���еķ�ʽ�����ʽṹ������

**ʵ��**

    #include &lt;stdio.h>
    #include &lt;string.h>
     
    struct Books
    {
       char  title[50];
       char  author[50];
       char  subject[100];
       int   book_id;
    };
     
    /* �������� */
    void printBook( struct Books book );
    int main( )
    {
       struct Books Book1;        /* ���� Book1������Ϊ Books */
       struct Books Book2;        /* ���� Book2������Ϊ Books */
     
       /* Book1 ���� */
       strcpy( Book1.title, "C Programming");
       strcpy( Book1.author, "Nuha Ali"); 
       strcpy( Book1.subject, "C Programming Tutorial");
       Book1.book_id = 6495407;
     
       /* Book2 ���� */
       strcpy( Book2.title, "Telecom Billing");
       strcpy( Book2.author, "Zara Ali");
       strcpy( Book2.subject, "Telecom Billing Tutorial");
       Book2.book_id = 6495700;
     
       /* ��� Book1 ��Ϣ */
       printBook( Book1 );
     
       /* ��� Book2 ��Ϣ */
       printBook( Book2 );
     
       return 0;
    }
    void printBook( struct Books book )
    {
       printf( "Book title : %s\n", book.title);
       printf( "Book author : %s\n", book.author);
       printf( "Book subject : %s\n", book.subject);
       printf( "Book book_id : %d\n", book.book_id);
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    Book title : C Programming
    Book author : Nuha Ali
    Book subject : C Programming Tutorial
    Book book_id : 6495407
    Book title : Telecom Billing
    Book author : Zara Ali
    Book subject : Telecom Billing Tutorial
    Book book_id : 6495700

### ָ��ṹ��ָ��

�����Զ���ָ��ṹ��ָ�룬��ʽ�붨��ָ���������ͱ�����ָ�����ƣ�������ʾ��

    struct Books *struct_pointer;

���ڣ������������������ָ������д洢�ṹ�����ĵ�ַ��Ϊ�˲��ҽṹ�����ĵ�ַ����� & ��������ڽṹ���Ƶ�ǰ�棬������ʾ��

    struct_pointer = &Book1;

Ϊ��ʹ��ָ��ýṹ��ָ����ʽṹ�ĳ�Ա��������ʹ�� -> �������������ʾ��

    struct_pointer->title;

������ʹ�ýṹָ������д�����ʵ�����⽫�����������ṹָ��ĸ��

**ʵ��**

    #include &lt;stdio.h>
    #include &lt;string.h>
     
    struct Books
    {
       char  title[50];
       char  author[50];
       char  subject[100];
       int   book_id;
    };
     
    /* �������� */
    void printBook( struct Books *book );
    int main( )
    {
       struct Books Book1;        /* ���� Book1������Ϊ Books */
       struct Books Book2;        /* ���� Book2������Ϊ Books */
     
       /* Book1 ���� */
       strcpy( Book1.title, "C Programming");
       strcpy( Book1.author, "Nuha Ali"); 
       strcpy( Book1.subject, "C Programming Tutorial");
       Book1.book_id = 6495407;
     
       /* Book2 ���� */
       strcpy( Book2.title, "Telecom Billing");
       strcpy( Book2.author, "Zara Ali");
       strcpy( Book2.subject, "Telecom Billing Tutorial");
       Book2.book_id = 6495700;
     
       /* ͨ���� Book1 �ĵ�ַ����� Book1 ��Ϣ */
       printBook( &Book1 );
     
       /* ͨ���� Book2 �ĵ�ַ����� Book2 ��Ϣ */
       printBook( &Book2 );
     
       return 0;
    }
    void printBook( struct Books *book )
    {
       printf( "Book title : %s\n", book->title);
       printf( "Book author : %s\n", book->author);
       printf( "Book subject : %s\n", book->subject);
       printf( "Book book_id : %d\n", book->book_id);
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    Book title : C Programming
    Book author : Nuha Ali
    Book subject : C Programming Tutorial
    Book book_id : 6495407
    Book title : Telecom Billing
    Book author : Zara Ali
    Book subject : Telecom Billing Tutorial
    Book book_id : 6495700

## C typedef
C �����ṩ�� typedef �ؼ��֣�������ʹ������Ϊ����ȡһ���µ����֡������ʵ��Ϊ���ֽ����ֶ�����һ������ BYTE��

    typedef unsigned char BYTE;

��������Ͷ���֮�󣬱�ʶ�� BYTE ����Ϊ���� unsigned char ����д�����磺

    BYTE  b1, b2;

���չ���������ʱ���д��ĸ���Ա������û�����������һ�������Ե���д������Ҳ����ʹ��Сд��ĸ�����£�

    typedef unsigned char byte;

��Ҳ����ʹ�� typedef ��Ϊ�û��Զ������������ȡһ���µ����֡����磬�����ԶԽṹ��ʹ�� typedef ������һ���µ������������֣�Ȼ��ʹ������µ�����������ֱ�Ӷ���ṹ���������£�

**ʵ��**

    #include &lt;stdio.h>
    #include &lt;string.h>
     
    typedef struct Books
    {
       char  title[50];
       char  author[50];
       char  subject[100];
       int   book_id;
    } Book;
     
    int main( )
    {
       Book book;
     
       strcpy( book.title, "C �̳�");
       strcpy( book.author, "Runoob"); 
       strcpy( book.subject, "�������");
       book.book_id = 12345;
     
       printf( "����� : %s\n", book.title);  // out : ����� : C �̳�
       printf( "������ : %s\n", book.author);  // out : ������ : Runoob
       printf( "����Ŀ : %s\n", book.subject);  // out : ����Ŀ : �������
       printf( "�� ID : %d\n", book.book_id);  // out : �� ID : 12345
     
       return 0;
    }

### typedef vs #define

     #define �� C ָ�����Ϊ�����������Ͷ���������� typedef ���ƣ��������������¼��㲻ͬ��

- typedef ������Ϊ���Ͷ���������ƣ�#define ��������Ϊ���Ͷ��������Ҳ��Ϊ��ֵ������������������Զ��� 1 Ϊ ONE��
- typedef ���ɱ�����ִ�н��͵ģ�#define �������Ԥ���������д���ġ�

������ #define ����򵥵��÷���

**ʵ��**

    #include <stdio.h>
     
    #define TRUE  1
    #define FALSE 0
     
    int main( )
    {
       printf( "TRUE ��ֵ: %d\n", TRUE);  // out : TRUE ��ֵ: 1
       printf( "FALSE ��ֵ: %d\n", FALSE);  // out : FALSE ��ֵ: 0
     
       return 0;
    }

## C ������

��������һ��������������ͣ�����������ͬ���ڴ�λ�ô洢��ͬ���������͡������Զ���һ�����ж��Ա�Ĺ����壬�����κ�ʱ��ֻ����һ����Ա����ֵ���������ṩ��һ��ʹ����ͬ���ڴ�λ�õ���Ч��ʽ��

### ���干����

Ϊ�˶��干���壬������ʹ�� union ��䣬��ʽ�붨��ṹ���ơ�union ��䶨����һ���µ��������ͣ����ж����Ա��union ���ĸ�ʽ���£�

    union [union tag]
    {
       member definition;
       member definition;
       ...
       member definition;
    } [one or more union variables];

union tag �ǿ�ѡ�ģ�ÿ�� member definition �Ǳ�׼�ı������壬���� int i; ���� float f; ����������Ч�ı������塣�ڹ����嶨���ĩβ�����һ���ֺ�֮ǰ��������ָ��һ��������������������ǿ�ѡ�ġ����涨��һ����Ϊ Data �Ĺ��������ͣ���������Ա i��f �� str

    union Data
    {
       int i;
       float f;
       char  str[20];
    } data;

���ڣ�Data ���͵ı������Դ洢һ��������һ��������������һ���ַ���������ζ��һ����������ͬ���ڴ�λ�ã����Դ洢����������͵����ݡ������Ը�����Ҫ��һ����������ʹ���κ����õĻ����û��Զ�����������͡�
������ռ�õ��ڴ�Ӧ�㹻�洢�����������ĳ�Ա�����磬�������ʵ���У�Data ��ռ�� 20 ���ֽڵ��ڴ�ռ䣬��Ϊ�ڸ�����Ա�У��ַ�����ռ�õĿռ������ġ������ʵ������ʾ����Ĺ�����ռ�õ����ڴ��С��

**ʵ��**

    #include &lt;stdio.h>
    #include &lt;string.h>
     
    union Data
    {
       int i;
       float f;
       char  str[20];
    };
     
    int main( )
    {
       union Data data;        
     
       printf( "Memory size occupied by data : %d\n", sizeof(data));  // out : Memory size occupied by data : 20
     
       return 0;
    }

### ���ʹ������Ա

Ϊ�˷��ʹ�����ĳ�Ա������ʹ�ó�Ա�����������.������Ա����������ǹ�����������ƺ�����Ҫ���ʵĹ������Ա֮���һ����š�������ʹ�� union �ؼ��������干�������͵ı����������ʵ����ʾ�˹�������÷���

**ʵ��**

    #include &lt;stdio.h>
    #include &lt;string.h>
     
    union Data
    {
       int i;
       float f;
       char  str[20];
    };
     
    int main( )
    {
       union Data data;        
     
       data.i = 10;
       data.f = 220.5;
       strcpy( data.str, "C Programming");
     
       printf( "data.i : %d\n", data.i);  // out : data.i : 1917853763
       printf( "data.f : %f\n", data.f);  // out : data.f : 4122360580327794900000000000000.000000
       printf( "data.str : %s\n", data.str);  // out : data.str : C Programming
     
       return 0;
    }

��������ǿ��Կ���������� i �� f ��Ա��ֵ���𻵣���Ϊ��󸳸�������ֵռ�����ڴ�λ�ã���Ҳ�� str ��Ա�ܹ���������ԭ������������������һ����ͬ��ʵ�������������ͬһʱ��ֻʹ��һ����������Ҳ��ʾ��ʹ�ù��������ҪĿ��

**ʵ��**

    #include &lt;stdio.h>
    #include &lt;string.h>
     
    union Data
    {
       int i;
       float f;
       char  str[20];
    };
     
    int main( )
    {
       union Data data;        
     
       data.i = 10;
       printf( "data.i : %d\n", data.i);  // out : data.i : 10
       
       data.f = 220.5;
       printf( "data.f : %f\n", data.f);  // out : data.f : 220.500000
       
       strcpy( data.str, "C Programming");
       printf( "data.str : %s\n", data.str);  // out : data.str : C Programming
     
       return 0;
    }

��������еĳ�Ա��������������Ϊͬһʱ��ֻ�õ�һ����Ա��

