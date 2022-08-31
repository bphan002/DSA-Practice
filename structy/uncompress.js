let pointer1 = 0
let pointer2 = 0
let uncompress = '' //cc

let i = 0
while (i < s.length) {
  let pointer2 = s[i]
  if (!nums.includes(pointer2)) {
      let times = parseInt(s.slice(pointer1,i))
      let j = 0
      while (j < times) {  //1 < 2
        uncompress += pointer2
        j++
      }
  i++
  pointer1 = i
  }
i++
}
  return uncompress
}