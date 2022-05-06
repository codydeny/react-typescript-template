const CHARACTER_SET: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const SIZE = 12;

const uidGenerator = (): string => {
  let id: string = "";
  for (var i = 0; i < SIZE; i++) {
    id += CHARACTER_SET.charAt(Math.floor(Math.random() * 36));
  }
  return id;
};

export default uidGenerator;
