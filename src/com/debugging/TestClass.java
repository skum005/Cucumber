package com.debugging;

public class TestClass {

	String className;
	public TestClass(String name){
		this.className = name;
		System.out.println("Not an Empty constructor");
	}
	
	public void test(){
		System.out.println(className + " is the className");
	}
	
	public void testMethod(int a){
		System.out.println("sqaure of the number " + a + "  is " + a*a);
	}

}
