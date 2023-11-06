// ASSIGNMENT:2

//Q1
const findGrades = (m) =>
{
    if(m<=10)
    {
        return "E";
    }
    else if(m<=20)
    {
        return "D";
    }
    else if(m<=30)
    {
        return "C";
    }
    else if(m<=40)
    {
        return "B";
    }
    else(m<=50)
    {
        return "A";
    }
}
console.log(findGrades(34));

// Q2
const getValue = (a) =>
{
    if(a=="P" || a=="p")
    {
        return "PrepBytes";
    }
    else if(a=="Z" || a=="z")
    {
        return "Zenith";
    }
    else if(a=="E" || a=="e")
    {
        return "Expert Coder";
    }
    else if(a=="D" || a=="d")
    {
        return "Data Structure";
    }
}
console.log(getValue("P"));

//Q3
const Max_out_of_Three = (a,b,c) =>
{
    max_val=0;
    if(a>b)
    {
        max_val=a;
    }
    else
    {
        max_val=b;
    }
    if(c>max_val)
    {
        max_val=c;
    }
    return max_val;
}
console.log(Max_out_of_Three(3,4,5));

//Q4
const sndSmallest = (a,b,c) =>
{
   if(a>b)
   {
    if(a<c)
    {
        return (`${a} is the second smallest`);
    }
   }
   if(b>a)
   {
    if(b<c)
    {
        return (`${b} is the second smalledst`);
    }
   }
   if(c>a)
   {
    if(c<b)
    {
        return (`${c} is the second smallest`);
    }
   }
}
console.log(sndSmallest(2,9,23));

// Q5
const Triangle_check = (a,b,c) =>
{
    if(a+b+c==180)
    {
        if(a>90 || b>90 || c>90)
        {
            return ("triangle is obtused angled");
        }
        else
        {
            return ("triangle is acute angled");
        }
    }
    else
    {
        return ("Not a triangle but a quadrilateral");
    }
}
console.log(Triangle_check(60,100,20));



