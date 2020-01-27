export const getArticles = (category) => `http://localhost:6010/articles/${category}`;
export const months = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
export const parseDate = (date) => {
    let arr = date.split(' ');
    return `${months.indexOf(arr[1]) + 1}/${parseInt(arr[0], 10)}/${arr[2]}`
}
export const parseDateForDissplay = (date) => {
    let updatedDate = new Date(date);
    return `${updatedDate.getDay()}. ${months[updatedDate.getDay() - 1]} ${updatedDate.getFullYear()}`
}