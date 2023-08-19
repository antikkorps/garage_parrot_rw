import { db } from 'src/lib/db'

export const horaires = () => {
  return db.horaire.findMany()
}

export const horaire = ({ id }) => {
  return db.horaire.findUnique({
    where: { id },
  })
}

export const createHoraire = ({ input }) => {
  return db.horaire.create({
    data: input,
  })
}

export const updateHoraire = ({ id, input }) => {
  return db.horaire.update({
    data: input,
    where: { id },
  })
}

export const deleteHoraire = ({ id }) => {
  return db.horaire.delete({
    where: { id },
  })
}
