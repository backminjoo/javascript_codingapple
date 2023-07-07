# 배열 반복문(forEach)
### - 배열의 반복문
### - 배열의 처음부터 마지막 요소까지 반복하여 실행
### - 파라미터로 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드

## 🌟 구조
forEach(function(item,index,arr){...})

##### item : 배열의 각 대상
##### index(선택사항) - 배열의 순서
##### arr(선택사항) - forEach 반복문에 사용되는 배열


## 예시
```javascript
var shirts[95,100,105];
shirts.forEach(function(item,index,arr){
  console.log(item, index, arr[index]);
  // 95 0 95
  // 100 1 100
  // 105 2 105
});
```


# 객체 반복문(for...in)
### - 객체(object)의 속성(key)을 순회하면서 해당 속성의 값을 출력

## 예시
```javascript
var obj = {name : 'kim', age : 20} //object 자료 개수만큼 반복문 돌리기
for(var key in obj){
  console.log(obj[key]); // obj 객체의 key속성에 해당하는 값을 가져옴
  // key 변수 name할당 -> obj['name']은 'kim'반환
  // key 변수 age할당 -> obj[age]-> 20반환
}
```



