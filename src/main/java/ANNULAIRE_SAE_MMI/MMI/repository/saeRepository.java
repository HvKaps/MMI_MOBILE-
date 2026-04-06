package ANNULAIRE_SAE_MMI.MMI.repository;

import ANNULAIRE_SAE_MMI.MMI.model.sae;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface saeRepository extends JpaRepository<sae, Long> {

    List<sae> findByAnnee(String annee);

    List<sae> findByDomaine(String domaine);

    // L'ancienne méthode de tri a été supprimée ici !
}