package ANNULAIRE_SAE_MMI.MMI.config;

import ANNULAIRE_SAE_MMI.MMI.model.sae;
import ANNULAIRE_SAE_MMI.MMI.model.groupe;
import ANNULAIRE_SAE_MMI.MMI.model.etudiant;
import ANNULAIRE_SAE_MMI.MMI.repository.saeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DATA {

    @Bean
    public CommandLineRunner initDatabase(saeRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                System.out.println("⚠️ Base de données vide. Chargement complet des fichiers CSV MMI2 et MMI3...");

                // ==========================================
                // 1. CRÉATION DE LA SAE 303 (MMI2)
                // ==========================================
                sae sae303 = new sae();
                sae303.setAnnee("MMI2");
                sae303.setSemestre("S3");
                sae303.setUeCorrespondante("SAE 303");
                sae303.setDomaine("Développement Web");

                String[][] donnees303 = {
                        {"ADJAOUD Rayane", "13.75"}, {"HUANG Patrick", "11.75"}, {"NIEWIDZIALA-BECKER Zoran", "11.75"}, {"LOUBARESSE Victor", "13"},
                        {"LUFUNDU Océane", "9.75"}, {"BOREL Maïlys", "9.25"}, {"MONNERAT Maxime", "10.5"}, {"DA COSTA Timéo", "17"},
                        {"GADAGNI Soumiyya", "17.25"}, {"JANVIER Charly", "17"}, {"TREFFAULT Axel", "17"}, {"MORANCY Manon", "5.25"},
                        {"ONESTAS Radji", "5.25"}, {"MAUDET Dylan", "5.25"}, {"MOYEUX Dorian", "5.25"}, {"Enes GÜNDEM", "15.25"},
                        {"Erwan PICARD-ALVAREZ", "15.5"}, {"Lucas ROBERT", "15.25"}, {"Enzo ABDI", "17.75"}, {"CORPET Kilian", "13.25"},
                        {"THEVIN Alexis", "13"}, {"LACHAB Imène", "14.25"}, {"GERANCE Lény", "14.75"}, {"PARADIS Jérémy", "10.25"},
                        {"GIROUX Benjamin", "10.25"}, {"SAIDJ Sofiane", "14"}, {"YO KING CHUEN Darel", "10.25"}, {"REDOT Naël", "10.25"},
                        {"LAUDET Mathieu", "15"}, {"JOUAN Gregoire", "14.75"}, {"GOSMAT Adam", "14.5"}, {"FARRUGGIA Maxime", "14.5"},
                        {"DERENNES Maxime", "17.75"}, {"KERGASTEL Témi", "CAN"}, {"TOCQUEVILLE Joachim", "12.5"}, {"CHISIU Sébastien", "16.25"},
                        {"DRAME Ibrahim", "13"}, {"CHOUDJAY Dylan", "11.5"}, {"SAVOURIN Thomas", "11.75"}, {"GUIDDIR Naïm", "11.25"},
                        {"CHUPIN Nathan", "11"}, {"Maxence COSTE", "16.25"}, {"Samuel RABARIJAONA", "15.75"}, {"Clément GUESNON", "5"},
                        {"Corentin DELEN", "15.75"}, {"SAMOURA Diaba", "15.75"}, {"ADMI Séfora", "11"}, {"GILET Amel", "15.5"},
                        {"LEBRETON Laura", "14"}, {"LUYEYE POLYDOR Nelly", "10.5"}, {"BOULLARD Raphaël", "14.5"}, {"KADI Wassim", "11.5"},
                        {"SIMON-JEAN Leana", "11.5"}, {"MARTON Eliot", "11.5"}, {"FLEURY Noa", "14"}, {"ANDOUARD Liam", "13.25"},
                        {"BOUQUET Ethan", "14.25"}, {"JEULAND Enzo", "13.25"}, {"TRELLE Florian", "13.25"}
                };

                genererGroupesAutomatiques(sae303, donnees303, "Groupe Web ");


                // ==========================================
                // 2. CRÉATION DE LA SAE 501 (MMI3)
                // ==========================================
                sae sae501 = new sae();
                sae501.setAnnee("MMI3");
                sae501.setSemestre("S5");
                sae501.setUeCorrespondante("SAE 501");
                sae501.setDomaine("Design et Communication");

                String[][] donnees501 = {
                        {"BEN BOUBAKER Sheinez", "10.05"}, {"BAL Zeinabou", "13.05"}, {"HOUNSOU Markhus", "12.3"}, {"MHOUMADI Makine", "10.8"},
                        {"BUHOT Yanis", "12"}, {"CHAPUT Théo", "12.375"}, {"HAMON Alexandre", "13.125"}, {"VANDELET Marin", "15"},
                        {"CHTIOUI Ibtissem", "13.45"}, {"GONCALVES Hugo Vitor", "11.7"}, {"PEREIRA Ruben", "11.7"}, {"MAHJOUB Assia", "10.7"},
                        {"KONATE Hamed", "10.65"}, {"KECKET-BAKER Trystan", "10.4"}, {"MANSOIBOU Warrick", "10.4"}, {"CHEURFA Liam", "15.05"},
                        {"BRUSA Joris", "11.3"}, {"CARPENTIER Timothé", "13.05"}, {"MONLAY Tom", ""}, {"ZAIEM Sarah", "12.75"},
                        {"BROUILLARD Thilya", "11.75"}, {"BUISSET Nicolas", "15.25"}, {"HENRIQUES MATEUS Léonardo", ""}, {"THIABAS HOULAI Keyla", "10.95"},
                        {"EDDABACHI Younes", "10.45"}, {"KOUASSI Emmanuel", "11.7"}, {"PEREZ SANCHEZ John", "12.2"}, {"THEVAKUMAR Aathavan", "15.55"},
                        {"VIGNESWARAN Abi", "11.8"}, {"SALAOUDINE Saffana", "13.8"}, {"BAER Oscar", "12.55"}, {"LAWSON Killian", "13.275"},
                        {"VEOPRASEUTH Nolan", "10.9"}, {"ZENATI Mehdi", "12.65"}, {"PREVOST Adrien", "14.15"}, {"VASANTHAN Luxchan", "11.55"},
                        {"KRISHNAKUMAR Abeeschan", "12.8"}, {"ANTUNES Enzo", "10.8"}, {"RANNOU Nicolas", "10.3"}, {"BALDINETTI Mattéo", "15.95"},
                        {"DINH Ken", "18.7"}, {"ROURE Vincent", "15.45"}, {"SEGHIRI Marwan", "13.45"}, {"CAMELIN Yannis", "14.05"},
                        {"RAKOTOMAVO Mathias", "13.8"}, {"SOM Yohan", "15.175"}, {"LOPERE Alexandre", "13.55"}
                };

                genererGroupesAutomatiques(sae501, donnees501, "Team Design ");

                repository.save(sae303);
                repository.save(sae501);

                System.out.println("✅ Données insérées avec succès ! Tous les étudiants sont répartis.");
            }
        };
    }

    private void genererGroupesAutomatiques(sae laSae, String[][] listeEtudiants, String prefixeGroupe) {
        groupe currentGroupe = null;
        int compteurGroupe = 1;

        for (int i = 0; i < listeEtudiants.length; i++) {

            if (i % 4 == 0) {
                currentGroupe = new groupe();
                currentGroupe.setNom(prefixeGroupe + compteurGroupe);
                currentGroupe.setChefDeGroupe(listeEtudiants[i][0]);
                laSae.addGroupe(currentGroupe);
                compteurGroupe++;
            }

            etudiant e = new etudiant();
            e.setNomComplet(listeEtudiants[i][0].trim());

            try {
                String noteTexte = listeEtudiants[i][1];
                if (noteTexte == null || noteTexte.trim().isEmpty() || noteTexte.contains("CAN")) {
                    e.setNote(0.0);
                } else {
                    e.setNote(Double.parseDouble(noteTexte.replace(",", ".")));
                }
            } catch (Exception ex) {
                e.setNote(0.0);
            }

            currentGroupe.addEtudiant(e);
        }
    }
}