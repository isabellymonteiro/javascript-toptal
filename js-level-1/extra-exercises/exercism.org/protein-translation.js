// https://exercism.org/tracks/javascript/exercises/protein-translation
"use strict"

const proteins = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP'
}

export const translate = (rna) => {
  if (!rna) return []
  const codons = rna.match(/.{1,3}/g)
  const translatedRna = []

  for (let codon of codons) {
    codon = codon.toUpperCase()

    if (proteins[codon] === 'STOP') break
    if (proteins[codon]) {
      translatedRna.push(proteins[codon])
    } else {
      throw Error("Invalid codon")
    }
  }

  return translatedRna
}
