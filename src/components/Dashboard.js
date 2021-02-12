import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { profilesCollection } from "../firebase";
import AddPet from "./content/AddPet";
import firebase from "firebase";

export default function Dashboard() {
  const [pets, setPets] = useState([]);
  const { currentUser } = useAuth()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      profilesCollection
        .doc(currentUser.uid)
        .collection("pets")
        .onSnapshot(snapshot => {
          setPets(snapshot.docs.map(doc => doc.data()));
          setLoading(false);
        })

    }, []
  )

  function createNewPet(newPet) {
    const { name, breed, petType, petGender } = newPet;
    profilesCollection.doc(currentUser.uid).collection("pets").add({
      name: name,
      breed: breed,
      type: petType,
      gender: petGender,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  return (
    <>
      {
        !loading && pets.length === 0 ? (
          <AddPet callback={ createNewPet }/>
        ) : (
          <h1>Pets component</h1>
        )
      }
    </>
  )
}
