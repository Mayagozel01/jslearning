/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    let sub='';
    let max=0;
        s=s+s[s.length-1];
    for (let j=0;j<s.length;j++){ sub=''
    for (let i=j;i<s.length;i++){
        console.log(sub,"--",i,"-",j)
        if (sub.indexOf(s[i])<0)   sub+=s[i];
        else {
            if (sub.length>max)max=sub.length;sub='';
        }}}
        return max;
};
console.log(lengthOfLongestSubstring("jbpnbwwd"));