namespace StrUtil {
    export function connect(str1: string, str2: string): string {
        return str1 + str2;
    }
}

namespace NumUtil {
    export function add(num1: number, num2: number): number {
        return num1 + num2;
    }
}

console.log(StrUtil.connect("Lorem", "Ipsum"));
console.log(NumUtil.add(25, 25));