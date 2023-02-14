/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSted = /* GraphQL */ `
  subscription OnCreateSted($filter: ModelSubscriptionStedFilterInput) {
    onCreateSted(filter: $filter) {
      id
      sted
      adresse
      postnr
      poststed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSted = /* GraphQL */ `
  subscription OnUpdateSted($filter: ModelSubscriptionStedFilterInput) {
    onUpdateSted(filter: $filter) {
      id
      sted
      adresse
      postnr
      poststed
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSted = /* GraphQL */ `
  subscription OnDeleteSted($filter: ModelSubscriptionStedFilterInput) {
    onDeleteSted(filter: $filter) {
      id
      sted
      adresse
      postnr
      poststed
      createdAt
      updatedAt
    }
  }
`;
export const onCreateArrangement = /* GraphQL */ `
  subscription OnCreateArrangement(
    $filter: ModelSubscriptionArrangementFilterInput
  ) {
    onCreateArrangement(filter: $filter) {
      id
      emne
      startTid
      sluttTid
      innhold
      utsendtDato
      purringer {
        items {
          id
          purreDato
          createdAt
          updatedAt
          arrangementPurringerId
        }
        nextToken
      }
      paakrevd {
        items {
          id
          createdAt
          updatedAt
          arrangementPaakrevdId
          arrangementIkkePaakrevdId
        }
        nextToken
      }
      ikkePaakrevd {
        items {
          id
          createdAt
          updatedAt
          arrangementPaakrevdId
          arrangementIkkePaakrevdId
        }
        nextToken
      }
      formsUrl
      sted {
        id
        sted
        adresse
        postnr
        poststed
        createdAt
        updatedAt
      }
      status {
        id
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      arrangementStedId
      arrangementStatusId
    }
  }
`;
export const onUpdateArrangement = /* GraphQL */ `
  subscription OnUpdateArrangement(
    $filter: ModelSubscriptionArrangementFilterInput
  ) {
    onUpdateArrangement(filter: $filter) {
      id
      emne
      startTid
      sluttTid
      innhold
      utsendtDato
      purringer {
        items {
          id
          purreDato
          createdAt
          updatedAt
          arrangementPurringerId
        }
        nextToken
      }
      paakrevd {
        items {
          id
          createdAt
          updatedAt
          arrangementPaakrevdId
          arrangementIkkePaakrevdId
        }
        nextToken
      }
      ikkePaakrevd {
        items {
          id
          createdAt
          updatedAt
          arrangementPaakrevdId
          arrangementIkkePaakrevdId
        }
        nextToken
      }
      formsUrl
      sted {
        id
        sted
        adresse
        postnr
        poststed
        createdAt
        updatedAt
      }
      status {
        id
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      arrangementStedId
      arrangementStatusId
    }
  }
`;
export const onDeleteArrangement = /* GraphQL */ `
  subscription OnDeleteArrangement(
    $filter: ModelSubscriptionArrangementFilterInput
  ) {
    onDeleteArrangement(filter: $filter) {
      id
      emne
      startTid
      sluttTid
      innhold
      utsendtDato
      purringer {
        items {
          id
          purreDato
          createdAt
          updatedAt
          arrangementPurringerId
        }
        nextToken
      }
      paakrevd {
        items {
          id
          createdAt
          updatedAt
          arrangementPaakrevdId
          arrangementIkkePaakrevdId
        }
        nextToken
      }
      ikkePaakrevd {
        items {
          id
          createdAt
          updatedAt
          arrangementPaakrevdId
          arrangementIkkePaakrevdId
        }
        nextToken
      }
      formsUrl
      sted {
        id
        sted
        adresse
        postnr
        poststed
        createdAt
        updatedAt
      }
      status {
        id
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      arrangementStedId
      arrangementStatusId
    }
  }
`;
export const onCreateStatus = /* GraphQL */ `
  subscription OnCreateStatus($filter: ModelSubscriptionStatusFilterInput) {
    onCreateStatus(filter: $filter) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStatus = /* GraphQL */ `
  subscription OnUpdateStatus($filter: ModelSubscriptionStatusFilterInput) {
    onUpdateStatus(filter: $filter) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStatus = /* GraphQL */ `
  subscription OnDeleteStatus($filter: ModelSubscriptionStatusFilterInput) {
    onDeleteStatus(filter: $filter) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePurring = /* GraphQL */ `
  subscription OnCreatePurring($filter: ModelSubscriptionPurringFilterInput) {
    onCreatePurring(filter: $filter) {
      id
      purreDato
      createdAt
      updatedAt
      arrangementPurringerId
    }
  }
`;
export const onUpdatePurring = /* GraphQL */ `
  subscription OnUpdatePurring($filter: ModelSubscriptionPurringFilterInput) {
    onUpdatePurring(filter: $filter) {
      id
      purreDato
      createdAt
      updatedAt
      arrangementPurringerId
    }
  }
`;
export const onDeletePurring = /* GraphQL */ `
  subscription OnDeletePurring($filter: ModelSubscriptionPurringFilterInput) {
    onDeletePurring(filter: $filter) {
      id
      purreDato
      createdAt
      updatedAt
      arrangementPurringerId
    }
  }
`;
export const onCreateGruppe = /* GraphQL */ `
  subscription OnCreateGruppe($filter: ModelSubscriptionGruppeFilterInput) {
    onCreateGruppe(filter: $filter) {
      id
      personer {
        items {
          id
          navn
          epost
          createdAt
          updatedAt
          gruppePersonerId
        }
        nextToken
      }
      createdAt
      updatedAt
      arrangementPaakrevdId
      arrangementIkkePaakrevdId
    }
  }
`;
export const onUpdateGruppe = /* GraphQL */ `
  subscription OnUpdateGruppe($filter: ModelSubscriptionGruppeFilterInput) {
    onUpdateGruppe(filter: $filter) {
      id
      personer {
        items {
          id
          navn
          epost
          createdAt
          updatedAt
          gruppePersonerId
        }
        nextToken
      }
      createdAt
      updatedAt
      arrangementPaakrevdId
      arrangementIkkePaakrevdId
    }
  }
`;
export const onDeleteGruppe = /* GraphQL */ `
  subscription OnDeleteGruppe($filter: ModelSubscriptionGruppeFilterInput) {
    onDeleteGruppe(filter: $filter) {
      id
      personer {
        items {
          id
          navn
          epost
          createdAt
          updatedAt
          gruppePersonerId
        }
        nextToken
      }
      createdAt
      updatedAt
      arrangementPaakrevdId
      arrangementIkkePaakrevdId
    }
  }
`;
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson($filter: ModelSubscriptionPersonFilterInput) {
    onCreatePerson(filter: $filter) {
      id
      navn
      epost
      createdAt
      updatedAt
      gruppePersonerId
    }
  }
`;
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson($filter: ModelSubscriptionPersonFilterInput) {
    onUpdatePerson(filter: $filter) {
      id
      navn
      epost
      createdAt
      updatedAt
      gruppePersonerId
    }
  }
`;
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson($filter: ModelSubscriptionPersonFilterInput) {
    onDeletePerson(filter: $filter) {
      id
      navn
      epost
      createdAt
      updatedAt
      gruppePersonerId
    }
  }
`;
