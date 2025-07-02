document.getElementById('submit').addEventListener('click', function() {
    let oddQuestions = [];
    let evenQuestions = [];
    let reverseScoringQuestions = [3, 15, 19, 22, 25, 27, 29, 31, 33, 35];
    
    // 反向计分函数
    function reverseScore(score) {
        switch (score) {
            case 1: return 7;
            case 2: return 6;
            case 3: return 5;
            case 4: return 4;
            case 5: return 3;
            case 6: return 2;
            case 7: return 1;
            default: return score;
        }
    }

    // 遍历所有问题
    for (let i = 1; i <= 36; i++) {
        let score = parseInt(document.getElementById('question' + i).value);
        if (isNaN(score) || score < 1 || score > 7) {
            alert('请确保所有题目都已经填写且分数在1到7之间,第 ' + i + ' 题填写错误');
            return;
        }

        // 处理反向计分
        if (reverseScoringQuestions.includes(i)) {
            score = reverseScore(score);
        }

        // 将分数分配到奇数题和偶数题
        if (i % 2 === 1) {
            oddQuestions.push(score);
        } else {
            evenQuestions.push(score);
        }
    }

    // 计算平均数
    let averageOdd = oddQuestions.reduce((a, b) => a + b, 0) / oddQuestions.length;
    let averageEven = evenQuestions.reduce((a, b) => a + b, 0) / evenQuestions.length;

    let M1 = averageOdd * 3.2893296 + averageEven * 5.4725318 - 11.5307833;
    let M2 = averageOdd * 7.2371075 + averageEven * 8.1776446 - 32.3553266;
    let M3 = averageOdd * 3.9246754 + averageEven * 9.7102446 - 28.4573220;
    let M4 = averageOdd * 7.3654621 + averageEven * 4.9392039 - 22.2281088;

    let attachment_type = {M1, M2, M3, M4};

    let maxVar = Object.keys(attachment_type).reduce((maxKey, currentKey) => {
        return attachment_type[currentKey] > attachment_type[maxKey] ? currentKey : maxKey;
    });

    switch (maxVar) {
        case "M1":
            alert("你是安全型依恋");
            break;
        case "M2":
            alert("你是焦虑型依恋");
            break;
        case "M3":
            alert("你是回避型依恋");
            break;
        case "M4":
            alert("你是混合型依恋");
            break;
        default:
            alert("无法识别你的依恋类型");
            break;
    }

});
