import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import { API_URL } from '../../apiConfig';
import { Picker } from '@react-native-picker/picker';

export default function EcranAjoutGroupe() {
  const { saeId } = useLocalSearchParams();

  const [nomGroupe, setNomGroupe] = useState('');
  const [nomEtu1, setNomEtu1] = useState('');
  const [noteEtu1, setNoteEtu1] = useState('10');
  const [nomEtu2, setNomEtu2] = useState('');
  const [noteEtu2, setNoteEtu2] = useState('10');
  const [nomEtu3, setNomEtu3] = useState('');
  const [noteEtu3, setNoteEtu3] = useState('10');
  const [nomEtu4, setNomEtu4] = useState('');
  const [noteEtu4, setNoteEtu4] = useState('10');
  const notesPossibles = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];

  const validerGroupe = () => {
    if (nomGroupe === '' || nomEtu1 === '') {
      Alert.alert("Attention", "Le nom du groupe et de l'étudiant 1 (chef) sont obligatoires.");
      return;
    }

    let listeEtudiants = [];
    if (nomEtu1 != '') listeEtudiants.push({ nomComplet: nomEtu1, note: Number(noteEtu1) });
    if (nomEtu2 != '') listeEtudiants.push({ nomComplet: nomEtu2, note: Number(noteEtu2) });
    if (nomEtu3 != '') listeEtudiants.push({ nomComplet: nomEtu3, note: Number(noteEtu3) });
    if (nomEtu4 != '') listeEtudiants.push({ nomComplet: nomEtu4, note: Number(noteEtu4) });

    const nouveauGroupe = {
      nom: nomGroupe,
      chefDeGroupe: nomEtu1,
      etudiants: listeEtudiants
    };

    axios.post(`${API_URL}/${saeId}/groupes`, nouveauGroupe)
      .then(() => {
        Alert.alert("Bravo", "Groupe ajouté avec succès !");
        router.back();
      })
      .catch(err => {
        console.log(err);
        Alert.alert("Erreur", "Le groupe n'a pas pu être ajouté.");
      });
  };

  return (
    <ScrollView style={styles.conteneur}>
      <Text style={styles.titre}>Nouveau Groupe</Text>

      <Text style={styles.label}>Nom du groupe :</Text>
      <TextInput style={styles.input} value={nomGroupe} onChangeText={setNomGroupe} />

      <Text style={styles.sousTitre}>Les étudiants :</Text>

      <Text style={styles.label}>Étudiant 1 (Sera le Chef de projet)</Text>
      <View style={styles.blocEtu}>
        <TextInput style={styles.input1} placeholder="Nom" value={nomEtu1} onChangeText={setNomEtu1} />
        <View style={styles.pickerNote}>
          <Picker selectedValue={noteEtu1} onValueChange={(val) => setNoteEtu1(val)} itemStyle={{ color: '#000' }}>
            {notesPossibles.map(n => <Picker.Item key={n} label={`${n}/20`} value={n} />)}
          </Picker>
        </View>
      </View>

      <Text style={styles.label}>Étudiant 2</Text>
      <View style={styles.blocEtu}>
        <TextInput style={styles.input1} placeholder="Nom" value={nomEtu2} onChangeText={setNomEtu2} />
        <View style={styles.pickerNote}>
          <Picker selectedValue={noteEtu2} onValueChange={(val) => setNoteEtu2(val)} itemStyle={{ color: '#000' }}>
            {notesPossibles.map(n => <Picker.Item key={n} label={`${n}/20`} value={n} />)}
          </Picker>
        </View>
      </View>

      <Text style={styles.label}>Étudiant 3</Text>
      <View style={styles.blocEtu}>
        <TextInput style={styles.input1} placeholder="Nom" value={nomEtu3} onChangeText={setNomEtu3} />
        <View style={styles.pickerNote}>
          <Picker selectedValue={noteEtu3} onValueChange={(val) => setNoteEtu3(val)} itemStyle={{ color: '#000' }}>
            {notesPossibles.map(n => <Picker.Item key={n} label={`${n}/20`} value={n} />)}
          </Picker>
        </View>
      </View>

      <Text style={styles.label}>Étudiant 4</Text>
      <View style={styles.blocEtu}>
        <TextInput style={styles.input1} placeholder="Nom" value={nomEtu4} onChangeText={setNomEtu4} />
        <View style={styles.pickerNote}>
          <Picker selectedValue={noteEtu4} onValueChange={(val) => setNoteEtu4(val)} itemStyle={{ color: '#000' }}>
            {notesPossibles.map(n => <Picker.Item key={n} label={`${n}/20`} value={n} />)}
          </Picker>
        </View>
      </View>

      <View style={{ marginTop: 25, marginBottom: 50 }}>
        <TouchableOpacity style={styles.boutonAction} onPress={validerGroupe}>
          <Text style={styles.boutonTexte}>Ajouter ce groupe</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conteneur: { padding: 20, paddingTop: 60, flex: 1, backgroundColor: '#f8f9fa' },
  titre: { fontSize: 26, fontWeight: '800', marginBottom: 25, textAlign: 'center', color: '#1e293b' },
  sousTitre: { fontSize: 18, fontWeight: '800', marginTop: 10, marginBottom: 15, color: '#3b82f6' },
  label: { marginBottom: 6, fontWeight: '700', color: '#475569', fontSize: 15 },
  input: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#cbd5e1', padding: 14, marginBottom: 20, borderRadius: 8, fontSize: 16 },
  blocEtu: { flexDirection: 'row', marginBottom: 15, alignItems: 'center' },
  input1: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#cbd5e1', padding: 14, flex: 2, marginRight: 10, borderRadius: 8, height: 52, fontSize: 16 },
  pickerNote: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#cbd5e1', flex: 1, borderRadius: 8, height: 52, justifyContent: 'center', overflow: 'hidden' },
  boutonAction: { backgroundColor: '#3b82f6', paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
  boutonTexte: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' }
});