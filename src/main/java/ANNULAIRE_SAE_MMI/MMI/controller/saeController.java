package ANNULAIRE_SAE_MMI.MMI.controller;

import ANNULAIRE_SAE_MMI.MMI.model.*;
import ANNULAIRE_SAE_MMI.MMI.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/saes")
@CrossOrigin(origins = "*")
public class saeController {

    @Autowired private saeRepository saeRepo;
    @Autowired private groupeRepository groupeRepo;

    @PostMapping
    public sae ajouterSae(@RequestBody sae s) {
        return saeRepo.save(s);
    }

    @PostMapping("/{id}/groupes")
    public sae ajouterGroupe(@PathVariable Long id, @RequestBody groupe g) {
        sae s = saeRepo.findById(id).orElseThrow();

        if (g.getEtudiants() != null) {
            for (etudiant e : g.getEtudiants()) {
                e.setGroupe(g);
            }
        }

        s.addGroupe(g);
        return saeRepo.save(s);
    }

    @PostMapping("/groupes/{id}/etudiants")
    public groupe ajouterEtudiant(@PathVariable Long id, @RequestBody etudiant e) {
        groupe g = groupeRepo.findById(id).orElseThrow();
        g.addEtudiant(e);
        return groupeRepo.save(g);
    }

    @GetMapping
    public List<sae> getAll() { return saeRepo.findAll(); }

    @GetMapping("/classement")
    public List<sae> getClassement() {
        List<sae> liste = saeRepo.findAll();
        liste.sort((s1, s2) -> Double.compare(s2.getMoyenneSae(), s1.getMoyenneSae()));
        return liste;
    }
}