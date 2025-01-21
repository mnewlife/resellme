import { API_URL } from "../config";

export const getDomains = async () => {
    const headers = {
        headers: {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZTZjNWU3Y2YzNTI4NzRiNDJjZTgwNTY3ODFkZDBjZmJlNzhlMjI4M2NhMGQ4OTQ1Y2FhNTc2N2MwMTE1YzIzZjI0NzFjZGE5M2U1MmRiNmIiLCJpYXQiOjE3Mzc0ODM0MDkuMDI2NzE2LCJuYmYiOjE3Mzc0ODM0MDkuMDI2NzE4LCJleHAiOjE3NjkwMTk0MDkuMDIwOTc5LCJzdWIiOiIzNCIsInNjb3BlcyI6W119.KaDVuRC-MbSzsTVPku9fNqb-LQo3vm3a9f6hryBpXxAYFJxMYAMgLmHXq3TjzDxY97DzxJ5ohUZsOUQtpWuzMFJ1Ac0DcTuSC4hegFed8Oqr7HNhT2-je1g2U-XkkYQIAVFbh7MApVyYo3-vNai6RGoIXI_V0IyxqMcl8UqjASH2GGxtJyeQkNrW2cFbOvXtkJPdylDqAPRNMjTB4SC6he2KRunX9P1afpc_p1tFE22C38ln1stfg2XXYdOclKkBvK4P8cA2wHNiiuZ5DmkwkMQGr-mGre_kkXlTaohZePrHNitnusKclThHUBYEE20rztUeM6e31E1-_wtgCo8RoktftVhucIYsSsUtv5exLOaDlJL3RwhZu1Jxkv3cV6GX01jBPhFrjkyeFN-2VdA1k2s7moXEKFCwZp0rnLfsyoR0NhHS4-ro3yPc38w1fB_987ymelAMcmCc9qclXlXwuuscDkL4kamBPFR_YkM-_NqBYemW8mHy-m76DMKgML0g1LWVv62ePat7NdaPNCWXCfIiwJD-5tlByhJ3H-10SiqT8s2WVDBSfRjfyF8_kbzztVUne8lZ2nBGHXtP3uBI5hdVNQOLmEokZEZwDakijHjkYhpJ1JkJ25SRtXGZ3AfqKJBF3yhGyzXIbxrsnHbqccEBYkdCCVuanUb7cI_5fWs',
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
        },
    };
  
    fetch(`${API_URL}/v1/domains`, headers)
      .then(reposResponse => {
        return reposResponse.json();
      })
      .then(userRepos => {
        console.log("userRepos: ", userRepos);
      })
      .catch(err => {
        console.log(err);
      });
  }