class parent{
    static a=10
    static b=20
static sum()
{
    console.log(this.a+this.b);
}
}
class child extends parent{                                //single level
    static c=50 
    static sub()
    {
        console.log(this.c-super.b);
    }
    
}
child.sum()                                               //multilevel

class sibling extends child{
    static sib()
    {
        console.log(super.c);
    }
}
sibling.sib()
sibling.sum()

class bro extends parent{                              //hieratical level
    static d=60
    static pro()
    {
        console.log(this.d*super.a);
    }
}
bro.pro()