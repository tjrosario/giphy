export default function truncate(str, max, trailing) {
  max = max || 10;
  trailing = trailing || '...';

  return str.substr(0, max - 1) + (str.length > max ? trailing : ''); 
}
