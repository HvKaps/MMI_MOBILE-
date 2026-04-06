import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import axios from 'axios';
import { API_URL } from '../../apiConfig';
import { Picker } from '@react-native-picker/picker';

export default function EcranAjoutSae() {
  const [ueCorrespondante, setUeCorrespondante] = useState('');
  const [domaine, setDomaine] = useState('Audiovisuel');
  const [annee, setAnnee] = useState('MMI 1');
  const [semestre, setSemestre] = useState('S1');
  const [maxPersonnes, setMaxPersonnes] = useState('4');

  const validerSae = () => {
    if (ueCorrespondante == '') {
      Alert.alert("Erreur", "Le nom de l'UE est obligatoire."); 
      return;
    }

    const nouvelleSae = {
      ueCorrespondante: ueCorrespondante,
      domaine: domaine,
      annee: annee,
      semestre: semestre,
      maxPersonnesParGroupe: parseInt(maxPersonnes)
    };

    axios.post(API_URL, nouvelleSae)
      .then(() => {
        Alert.alert("Succès", "La SAé a été créée !");
        router.back();
      })
      .catch(err => {
        Alert.alert("Erreur", "Impossible de créer la SAé.");
      });
  };

  return (
    <ScrollView style={styles.conteneur}>
      <Text style={styles.titre}>Ajouter une SAé</Text>

      <Text style={styles.label}>Nom de l'UE (ex: SAE 303) :</Text>
      <TextInput 
        style={styles.champSaisie} 
        value={ueCorrespondante} 
        onChangeText={setUeCorrespondante} 
      />

      <Text style={styles.label}>Domaine :</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={domaine} onValueChange={(val) => setDomaine(val)} itemStyle={{ color: '#000' }}>
          <Picker.Item label="Audiovisuel" value="Audiovisuel" />
          <Picker.Item label="Développement" value="Développement" />
          <Picker.Item label="Développement Web" value="Développement Web" />
          <Picker.Item label="Cybersécurité" value="Cybersécurité" />
          <Picker.Item label="Communication" value="Communication" />
          <Picker.Item label="Design et Communication" value="Design et Communication" />
        </Picker>
      </View>

      <Text style={styles.label}>Année :</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={annee} onValueChange={(val) => setAnnee(val)} itemStyle={{ color: '#000' }}>
          <Picker.Item label="MMI 1" value="MMI 1" />
          <Picker.Item label="MMI 2" value="MMI 2" />
          <Picker.Item label="MMI 3" value="MMI 3" />
         </Picker>
      </View>

      <Text style={styles.label}>Semestre :</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={semestre} onValueChange={(val) => setSemestre(val)} itemStyle={{ color: '#000' }}>
          <Picker.Item label="S1" value="S1" />
          <Picker.Item label="S2" value="S2" />
          <Picker.Item label="S3" value="S3" />
          <Picker.Item label="S4" value="S4" />
          <Picker.Item label="S5" value="S5" />
          <Picker.Item label="S6" value="S6" />
        </Picker>
      </View>

      <Text style={styles.label}>Max. étudiants :</Text>
      <TextInput 
        style={styles.champSaisie} 
        value={maxPersonnes} 
        onChangeText={setMaxPersonnes} 
      />

      <View style={{ marginTop: 20, marginBottom: 50 }}>
        <TouchableOpacity style={styles.boutonAction} onPress={validerSae}>
          <Text style={styles.boutonTexte}>Créer la SAé</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conteneur: { padding: 20, flex: 1, paddingTop: 60, backgroundColor: '#f8f9fa' },
  titre: { fontSize: 26, fontWeight: '800', marginBottom: 25, textAlign: 'center', color: '#1e293b' },
  label: { marginBottom: 6, fontWeight: '700', color: '#475569', fontSize: 15 },
  champSaisie: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#cbd5e1', padding: 14, marginBottom: 20, borderRadius: 8, fontSize: 16 },
  pickerContainer: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#cbd5e1', marginBottom: 20, borderRadius: 8, overflow: 'hidden' },
  boutonAction: { backgroundColor: '#3b82f6', paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
  boutonTexte: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' }
});