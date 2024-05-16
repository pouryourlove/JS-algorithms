function harmlessRansomeNote(noteText, magazineText) {
  let noteArr = noteText.split(" ");
  let magazineArr = magazineText.split(" ");
  let magazineObj = {};

  magazineArr.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  console.log(magazineObj);
}

harmlessRansomeNote("", "this is all the magaine text in the magazine");
