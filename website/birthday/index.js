function calculateDaysUntilBirthday(birthDate) {

    const currentDate = new Date();
    
    birthDate.setFullYear(currentDate.getFullYear());

    if (currentDate > birthDate) {
        birthDate.setFullYear(currentDate.getFullYear() + 1);
    }

    const timeDiff = birthDate - currentDate;

    const daysUntilBirthday = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return daysUntilBirthday;
}

function calculateAge(birthDate) {
    const currentDate = new Date();
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
    
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    
    let age = currentYear - birthYear;

    // 如果当前月份小于出生月份，或者当前月份等于出生月份但是当前日期小于出生日期，年龄减1
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    console.log(age)
    return age;
}


const birthday = document.querySelectorAll('.person');

//console.log(birthday)

birthday.forEach((birthday, e) => {
    //console.log(birthday)
    const birthDate = new Date(birthday.querySelector('.date').textContent.trim())
    //console.log(birthDate)
    birthday.querySelector('.age').textContent = `${calculateAge(birthDate)} 歲`

    birthday.querySelector('.left_day').textContent = '剩餘 ' + calculateDaysUntilBirthday(birthDate) + ' 天'
    

});



window.addEventListener('resize', function() {
    if (window.innerWidth < 500) { // 例如，当窗口宽度小于768像素时
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=0.5'); // 缩小视口比例
    }
});

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 更改页面缩放比例
if (isMobileDevice()) {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=0.5'); // 例如，将初始缩放比例设置为0.5
}