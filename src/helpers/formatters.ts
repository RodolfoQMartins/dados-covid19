export const formatNumber = (num:string) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}