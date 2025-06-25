const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사']
/* 위의 2개의 배열을 객체 배열 1개로 변경*/ 
// 객체 예시 :{time: '09:00'.todo:'과제'}
const schedule = [
    {time: '09:00',todo: '수업'},
    {time: '11:00',todo: '과제'},
    {time: '12:30',todo: '점심식사'},
    {time: '14:00',todo: '주간회의'},
    {time: '16:45',todo: '자료조사'},

]
function printRow(time){
    const tr = document.createElement('tr')
    for(let key in time){
        const td = document.createElement('td')
        td.textContent = time[key]
        tr.appendChild(td)
    }
    return tr
}

function printRow(todo){
    const tr = document.createElement('tr')
    for(let key in todo){
        const td = document.createElement('td')
        td.textContent = todo[key]
        tr.appendChild(td)
    }
    return tr
}

const root = document.getElementById('root')
const table = document.createElement('table')
table.innerHTML = `<tr>
                  <th>시간</th>
                  <th>09:00</th>
                  <th>11:00</th>
                  <th>12:30</th>
                  <th>14:00</th>
                  <th>16:45</th>
                  </tr>`
                  root.appendChild(table)
                  
time.forEach(time => {
    const trResult = print(time)
    table.appendChild(trResult)
})
const root1 = document.getElementById('root1')
const table1 = document.createElement('table1')
table.innerHTML = `<tr>
                  <th>할일</th>
                  <th>수업</th>
                  <th>과제</th>
                  <th>점심식사</th>
                  <th>주간회의</th>
                  <th>자료조사</th>
                  </tr>`
                  root1.appendChild(table)
time.forEach(time => {
    const trResult = print(time)
    table.appendChild(trResult)
})
// schedule,forEach() 로 연습하기