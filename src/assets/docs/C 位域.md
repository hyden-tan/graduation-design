# C λ��
�������Ľṹ�а��������������ֻ�� TRUE/FALSE ����������

    struct
    {
      unsigned int widthValidated;
      unsigned int heightValidated;
    } status;

��ķ�ʽ��������ڽṹ��ʹ�������ı����������Զ�������Ŀ�������߱�����������ֻʹ����Щ�ֽڡ����磬����Ľṹ������д�ɣ�

    struct
    {
      unsigned int widthValidated : 1;
      unsigned int heightValidated : 1;
    } status;

���ڣ�����Ľṹ�У�status ������ռ�� 4 ���ֽڵ��ڴ�ռ䣬����ֻ�� 2 λ�������洢ֵ����������� 32 ��������ÿһ���������Ϊ 1 λ����ô status �ṹ��ʹ�� 4 ���ֽڣ���ֻҪ���ٶ���һ�����������ʹ���� 33 ����������ô���������ڴ����һ�����洢�� 33 �����������ʱ��Ϳ�ʼʹ�� 8 ���ֽڡ������ǿ��������ʵ�������������

    #include &lt;stdio.h>
    #include &lt;string.h>
    
    /* ����򵥵Ľṹ */
    struct
    {
      unsigned int widthValidated;
      unsigned int heightValidated;
    } status1;
    
    /* ����λ��ṹ */
    struct
    {
      unsigned int widthValidated : 1;
      unsigned int heightValidated : 1;
    } status2;
     
    int main( )
    {
       printf( "Memory size occupied by status1 : %d\n", sizeof(status1));  // out : Memory size occupied by status1 : 8
       printf( "Memory size occupied by status2 : %d\n", sizeof(status2));  // out : Memory size occupied by status2 : 4
    
       return 0;
    }

## λ������

�ڽṹ������λ�����ʽ���£�

    struct
    {
      type [member_name] : width ;
    };

�������й�λ���б���Ԫ�ص�������
- **type**
�������ͣ���������ν���λ���ֵ�����Ϳ��������͡��з������͡��޷������͡�
- **member_name**
λ������ơ�
- **width	**
λ����λ����������ȱ���С�ڻ����ָ�����͵�λ��ȡ�


����Ԥ�����ȵı�������Ϊλ��λ����Դ洢���� 1 λ���������磬��Ҫһ���������洢�� 0 �� 7 ��ֵ�������Զ���һ�����Ϊ 3 λ��λ�����£�

    struct
    {
      unsigned int age : 3;
    } Age;

����Ľṹ����ָʾ C ��������age ������ֻʹ�� 3 λ���洢���ֵ���������ͼʹ�ó��� 3 λ�����޷���ɡ����������������ʵ����

    #include &lt;stdio.h>
    #include &lt;string.h>
    
    struct
    {
      unsigned int age : 3;
    } Age;
    
    int main( )
    {
       Age.age = 4;
       printf( "Sizeof( Age ) : %d\n", sizeof(Age) );  // out : Sizeof( Age ) : 4
       printf( "Age.age : %d\n", Age.age );  // out : Age.age : 4
    
       Age.age = 7;
       printf( "Age.age : %d\n", Age.age );  // out : Age.age : 7
    
       Age.age = 8;
       printf( "Age.age : %d\n", Age.age );  // out : Age.age : 0
    
       return 0;
    }


