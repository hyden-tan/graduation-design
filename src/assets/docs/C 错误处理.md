# C ������

C ���Բ��ṩ�Դ������ֱ��֧�֣�������Ϊһ��ϵͳ������ԣ����Է���ֵ����ʽ���������ʵײ����ݡ��ڷ�������ʱ��������� C �� UNIX �������÷��� 1 �� NULL��ͬʱ������һ��������� errno���ô��������ȫ�ֱ�������ʾ�ں��������ڼ䷢���˴����������� <error.h> ͷ�ļ����ҵ����ָ����Ĵ�����롣
���ԣ�C ����Ա����ͨ����鷵��ֵ��Ȼ����ݷ���ֵ������ȡ�����ʵ��Ķ�����������ԱӦ���ڳ����ʼ��ʱ���� errno ����Ϊ 0������һ�����õı��ϰ�ߡ�0 ֵ��ʾ������û�д���

## errno��perror() �� strerror()
C �����ṩ�� perror() �� strerror() ��������ʾ�� errno ��ص��ı���Ϣ��

- perror() ������ʾ�����������ַ��������һ��ð�š�һ���ո�͵�ǰ errno ֵ���ı���ʾ��ʽ��
- strerror() ����������һ��ָ�룬ָ��ָ��ǰ errno ֵ���ı���ʾ��ʽ��

��������ģ��һ�ִ�����������Դ�һ�������ڵ��ļ���������ʹ�ö��ַ�ʽ�����������Ϣ������������ʹ�ú�������ʾ�÷���������һ����Ҫע�⣬��Ӧ��ʹ�� stderr �ļ�����������еĴ���

    #include &lt;stdio.h>
    #include &lt;errno.h>
    #include &lt;string.h>
    
    extern int errno ;
    
    int main ()
    {
       FILE * pf;
       int errnum;
       pf = fopen ("unexist.txt", "rb");
       if (pf == NULL)
       {
          errnum = errno;
          fprintf(stderr, "�����: %d\n", errno);
          perror("ͨ�� perror �������");
          fprintf(stderr, "���ļ�����: %s\n", strerror( errnum ));
       }
       else
       {
          fclose (pf);
       }
       return 0;
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    �����: 2
    ͨ�� perror �������: No such file or directory
    ���ļ�����: No such file or directory

## ������Ĵ���

�ڽ��г�������ʱ��������������Ƿ�Ϊ�㣬��ᵼ��һ������ʱ����
Ϊ�˱��������������������Ĵ����ڽ��г�������ǰ���ȼ������Ƿ�Ϊ�㣺

    #include &lt;stdio.h>
    #include &lt;stdlib.h>
    
    main()
    {
       int dividend = 20;
       int divisor = 0;
       int quotient;
     
       if( divisor == 0){
          fprintf(stderr, "����Ϊ 0 �˳�����...\n");
          exit(-1);
       }
       quotient = dividend / divisor;
       fprintf(stderr, "quotient ������ֵΪ : %d\n", quotient );
    
       exit(0);
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    ����Ϊ 0 �˳�����...

## �����˳�״̬
ͨ������£�����ɹ�ִ����һ�����������˳���ʱ������ֵ EXIT_SUCCESS�������EXIT_SUCCESS �Ǻ꣬��������Ϊ 0��
��������д���һ�ִ�������������˳�����ʱ�������״ֵ̬ EXIT_FAILURE��������Ϊ -1�����ԣ�����ĳ������д�ɣ�

    #include &lt;stdio.h>
    #include &lt;stdlib.h>
    
    main()
    {
       int dividend = 20;
       int divisor = 5;
       int quotient;
     
       if( divisor == 0){
          fprintf(stderr, "����Ϊ 0 �˳�����...\n");
          exit(EXIT_FAILURE);
       }
       quotient = dividend / divisor;
       fprintf(stderr, "quotient ������ֵΪ: %d\n", quotient );
    
       exit(EXIT_SUCCESS);
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    quotient ������ֵΪ : 4