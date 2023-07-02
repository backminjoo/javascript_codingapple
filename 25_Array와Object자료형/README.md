# array, object

### array 자료형 [자료1, 자료2, 자료3...]
```javascript
<script>
  var car = ['소나타',50000, 'white'];
  car[0] = '아반떼' //array 자료 추가/수정
  console.log(car[1]); //array에서 1번째 꺼내서 출력
  
</script>
```

### object자료형 {이름1:자료1, 이름2:자료2...}
#### key:value 형태 - 이름 붙여서 저장가능
```javascript
<script>
  var car2 = { name : '소나타', price : 50000 }
  console.log(car2['name']) //object에서 자료 꺼내는 방법
  console.log(car2.price) //car2['name'])과 동일
  car2.price = 60000; //자료 수정/추가
</script>
```
### array / object 차이점
array는 자료간 순서가 존재하지만, object는 순서가 존재하지 않음
따라서 car2는 인덱싱을 할 수 없음

#### array는 순서 존재하기때문에 **자료간 정렬**과 **중간에 자르기**도 가능
그 외에 array에 사용할 수 있는 많은 기본함수들 존재
```javascript
<script>
 car.sort();
 car.slice(1,3));
</script>
```
