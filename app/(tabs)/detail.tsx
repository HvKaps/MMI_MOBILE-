import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router, useFocusEffect } from 'expo-router';
import axios from 'axios';
import { API_URL } from '../../apiConfig';

export default function EcranDetails() {
  const { donneesSae } = useLocalSearchParams();
  const initSae = JSON.parse(donneesSae as string);
  const [saeSelectionnee, setSaeSelectionnee] = useState(initSae);

  useFocusEffect(
    useCallback(() => {
      axios.get(`${API_URL}/classement`)
        .then(reponse => {
          const laBonneSae = reponse.data.find((s: any) => s.id === initSae.id);
          if (laBonneSae) {
            setSaeSelectionnee(laBonneSae);
          }
        })
        .catch(err => console.log(err));
    }, [])
  );

  const lesGroupes = saeSelectionnee.groupes || [];
  
  return (
    <View style={styles.conteneur}>
      <Text style={styles.titre}>{saeSelectionnee.ueCorrespondante}</Text>
      <Text style={styles.sousTitrePage}>Il y a {lesGroupes.length} groupes au total.</Text>
      
      <FlatList
        data={lesGroupes}
        renderItem={({ item }) => (
          <View style={styles.carteGroupe}>
            <Text style={styles.nomGroupe}>Projet: {item.nom}</Text>
            <Text>Chef de projet : {item.chefDeGroupe}</Text>
            
            <Text style={{ marginTop: 10, fontWeight: 'bold', textDecorationLine: 'underline' }}>
              Membres de l'équipe :
            </Text>
            {item.etudiants && item.etudiants.map((etudiant: any, index: number) => (
              <View key={index} style={{ marginTop: 5 }}>
             <Text style={styles.etudiantTexte}>• {etudiant.nomComplet} (Note : {etudiant.note}/20)</Text>
              </View>
            ))}
          </View>
        )}
      />

      <View style={{ marginTop: 20, marginBottom: 30 }}>
        <TouchableOpacity 
          style={styles.boutonAction}
          onPress={() => {
            router.push({ 
              pathname: '/ajouter-groupe', 
              params: { saeId: saeSelectionnee.id } 
            });
          }}
        >
          <Text style={styles.boutonTexte}>+ Ajouter un groupe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#f8f9fa' },
  titre: { fontSize: 26, fontWeight: '800', textAlign: 'center', color: '#1e293b', marginBottom: 4 },
  sousTitrePage: { fontSize: 15, textAlign: 'center', color: '#64748b', marginBottom: 25 },
  carteGroupe: { backgroundColor: '#ffffff', padding: 20, marginBottom: 15, borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 3, elevation: 2 },
  nomGroupe: { fontSize: 18, fontWeight: '800', color: '#0f172a', marginBottom: 6 },
  etudiantTexte: { fontSize: 15, color: '#475569', paddingVertical: 4 },
  boutonAction: { backgroundColor: '#3b82f6', paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
  boutonTexte: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' }
});