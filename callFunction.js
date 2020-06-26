var data;
window.addEventListener('message', receiver, false);
function receiver(e) {
    data = undefined;
    if (e.origin != "http://localhost:49199") {
        data = e.data;
        console.log('message', e.data)
        console.log('origin', e.origin)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function GetValue() {
    console.log('1초간격으로 총5회에 걸쳐서 데이터 유무를 체크합니다');
    // Sleep in loop
    for (let i = 0; i < 5; i++) {
        if (data === undefined)
            await sleep(1000);
        else {
            console.log("데이터가 발견했습니다.");
            break;
        }
        console.log("데이터 대기중 : " + i);
    }

    console.log("리턴 :\n" + data);
    return data;
}


