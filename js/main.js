/*
JS에서 객체를 생성하는 방법 2가지
1-객체리터럴식으로 생성
2-생성자를 통한 인스턴스생성

//객체리터럴: 값을 넣어서 만드는거 값이 있는거. 객체에 값이 이미 넣어져있는거
//인스턴스=객체
const s1={
  name:'David'
}

ES6에서의 객체지향
-동일한 형식의 객체를 대량으로 뽑아내야 될때 객체 생성을 자동화 
-생성자:객체를 생성해주는 함수
-인스턴스:생성자를 통해서 복사가된 객체
-프로토타입:생성자 안에서 자동으로 추가되는 공통의 저장공간(각 인스턴스에 활용될 함수 등록: 메서드)
-같은 생성자를 통해서 복사된 인스턴스들은 prototype에 등록된 메서드를 공유
-생성자 안쪽의 this:해당 생성자를 통해서 앞으로 복사될 인스턴스 객체를 지칭
*/

class Student {
	//클래스 안쪽에만 있는 함수
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.school = 'DCO';
	}

	plusAge() {
		this.age = this.age + 1;
	}
	schoolYes(txt) {
		this.school = txt;
	}
}
const s1 = new Student('David', 20);
const s2 = new Student('Aavid', 21);

console.log(s1);
s1.plusAge();
[s1, s2].forEach((el) => el.schoolYes('abc'));
console.log(s1);
console.log(s2);
